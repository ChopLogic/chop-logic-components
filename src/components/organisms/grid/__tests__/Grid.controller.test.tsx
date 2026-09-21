import { GridSortDirection } from '@enums';
import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useGridController } from '../Grid.controller';

describe('useGridController', () => {
  const mockData = [
    { id: 'row1', name: 'Charlie', country: 'Germany' },
    { id: 'row2', name: 'Alice', country: 'Mexico' },
    { id: 'row3', name: 'Bob', country: 'Austria' },
  ];

  describe('Initial state', () => {
    it('should initialize sortState with field: null and direction: null', () => {
      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
        }),
      );

      expect(result.current.sortState).toEqual({ field: null, direction: null });
    });

    it('should return sortedData equal to original data when no sort applied', () => {
      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
        }),
      );

      expect(result.current.sortedData).toEqual(mockData);
    });
  });

  describe('Uncontrolled mode (no sortField/sortDirection props)', () => {
    it('should update internal sortState when handleSortClick is called', () => {
      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
        }),
      );

      act(() => {
        result.current.handleSortClick('name');
      });

      expect(result.current.sortState).toEqual({
        field: 'name',
        direction: GridSortDirection.Asc,
      });
    });

    it('should cycle through sort states: null → asc → desc → null', () => {
      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
        }),
      );

      // Initial state is null/null
      expect(result.current.sortState.direction).toBeNull();

      // First click: null → asc
      act(() => {
        result.current.handleSortClick('name');
      });
      expect(result.current.sortState).toEqual({
        field: 'name',
        direction: GridSortDirection.Asc,
      });

      // Second click: asc → desc
      act(() => {
        result.current.handleSortClick('name');
      });
      expect(result.current.sortState).toEqual({
        field: 'name',
        direction: GridSortDirection.Desc,
      });

      // Third click: desc → null
      act(() => {
        result.current.handleSortClick('name');
      });
      expect(result.current.sortState).toEqual({
        field: null,
        direction: null,
      });

      // Fourth click: null → asc (cycle repeats)
      act(() => {
        result.current.handleSortClick('name');
      });
      expect(result.current.sortState).toEqual({
        field: 'name',
        direction: GridSortDirection.Asc,
      });
    });

    it('should reset to asc when clicking a different column', () => {
      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
        }),
      );

      // Set up sort on 'name' column (desc state)
      act(() => {
        result.current.handleSortClick('name');
      });
      act(() => {
        result.current.handleSortClick('name');
      });
      expect(result.current.sortState).toEqual({
        field: 'name',
        direction: GridSortDirection.Desc,
      });

      // Click on different column 'country'
      act(() => {
        result.current.handleSortClick('country');
      });
      expect(result.current.sortState).toEqual({
        field: 'country',
        direction: GridSortDirection.Asc,
      });
    });

    it('should update sortedData to reflect the internal sortState', () => {
      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
        }),
      );

      // Initially unsorted
      expect(result.current.sortedData).toEqual(mockData);

      // Sort ascending by name
      act(() => {
        result.current.handleSortClick('name');
      });

      const sortedAsc = result.current.sortedData.map((item) => item.name);
      expect(sortedAsc).toEqual(['Alice', 'Bob', 'Charlie']);

      // Sort descending by name
      act(() => {
        result.current.handleSortClick('name');
      });

      const sortedDesc = result.current.sortedData.map((item) => item.name);
      expect(sortedDesc).toEqual(['Charlie', 'Bob', 'Alice']);

      // Clear sort
      act(() => {
        result.current.handleSortClick('name');
      });

      expect(result.current.sortedData).toEqual(mockData);
    });

    it('should invoke onSortChange callback with new state when provided', () => {
      const mockOnSortChange = vi.fn();

      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
          onSortChange: mockOnSortChange,
        }),
      );

      act(() => {
        result.current.handleSortClick('name');
      });

      expect(mockOnSortChange).toHaveBeenCalledWith({
        field: 'name',
        direction: GridSortDirection.Asc,
      });

      act(() => {
        result.current.handleSortClick('name');
      });

      expect(mockOnSortChange).toHaveBeenCalledWith({
        field: 'name',
        direction: GridSortDirection.Desc,
      });

      act(() => {
        result.current.handleSortClick('name');
      });

      expect(mockOnSortChange).toHaveBeenCalledWith({
        field: null,
        direction: null,
      });
    });
  });

  describe('Controlled mode (both sortField and sortDirection props provided)', () => {
    it('should reflect sortState from provided props, not internal state', () => {
      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
          sortField: 'name',
          sortDirection: GridSortDirection.Desc,
        }),
      );

      expect(result.current.sortState).toEqual({
        field: 'name',
        direction: GridSortDirection.Desc,
      });
    });

    it('should NOT update internal state when handleSortClick is called', () => {
      const mockOnSortChange = vi.fn();

      const { result, rerender } = renderHook(
        ({ sortField, sortDirection }) =>
          useGridController({
            data: mockData,
            sortField,
            sortDirection,
            onSortChange: mockOnSortChange,
          }),
        {
          initialProps: {
            sortField: 'name',
            sortDirection: GridSortDirection.Asc,
          },
        },
      );

      // Click sort button
      act(() => {
        result.current.handleSortClick('name');
      });

      // sortState should still reflect props (not internal state update)
      expect(result.current.sortState).toEqual({
        field: 'name',
        direction: GridSortDirection.Asc,
      });

      // Callback should be invoked with computed next state
      expect(mockOnSortChange).toHaveBeenCalledWith({
        field: 'name',
        direction: GridSortDirection.Desc,
      });

      // Simulate parent updating props in response to callback
      rerender({
        sortField: 'name',
        sortDirection: GridSortDirection.Desc,
      });

      expect(result.current.sortState).toEqual({
        field: 'name',
        direction: GridSortDirection.Desc,
      });
    });

    it('should invoke onSortChange with computed next state for same column', () => {
      const mockOnSortChange = vi.fn();

      const { result, rerender } = renderHook(
        ({ sortField, sortDirection }) =>
          useGridController({
            data: mockData,
            sortField,
            sortDirection,
            onSortChange: mockOnSortChange,
          }),
        {
          initialProps: {
            sortField: 'name',
            sortDirection: GridSortDirection.Asc,
          },
        },
      );

      // Click same column: asc → desc
      act(() => {
        result.current.handleSortClick('name');
      });
      expect(mockOnSortChange).toHaveBeenCalledWith({
        field: 'name',
        direction: GridSortDirection.Desc,
      });

      // Simulate parent update
      rerender({
        sortField: 'name',
        sortDirection: GridSortDirection.Desc,
      });

      // Click same column: desc → null
      act(() => {
        result.current.handleSortClick('name');
      });
      expect(mockOnSortChange).toHaveBeenCalledWith({
        field: null,
        direction: null,
      });
    });

    it('should invoke onSortChange with asc when clicking a different column', () => {
      const mockOnSortChange = vi.fn();

      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
          sortField: 'name',
          sortDirection: GridSortDirection.Desc,
          onSortChange: mockOnSortChange,
        }),
      );

      // Click different column
      act(() => {
        result.current.handleSortClick('country');
      });

      expect(mockOnSortChange).toHaveBeenCalledWith({
        field: 'country',
        direction: GridSortDirection.Asc,
      });
    });

    it('should display sortedData according to prop values', () => {
      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
          sortField: 'name',
          sortDirection: GridSortDirection.Asc,
        }),
      );

      const sortedNames = result.current.sortedData.map((item) => item.name);
      expect(sortedNames).toEqual(['Alice', 'Bob', 'Charlie']);
    });

    it('should take no action when onSortChange is not provided', () => {
      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
          sortField: 'name',
          sortDirection: GridSortDirection.Asc,
        }),
      );

      // Should not throw when clicking without onSortChange
      act(() => {
        result.current.handleSortClick('name');
      });

      // State should remain unchanged (still reflects props)
      expect(result.current.sortState).toEqual({
        field: 'name',
        direction: GridSortDirection.Asc,
      });
    });
  });

  describe('Mode detection', () => {
    it('should be in uncontrolled mode when neither sortField nor sortDirection provided', () => {
      const mockOnSortChange = vi.fn();

      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
          onSortChange: mockOnSortChange,
        }),
      );

      // Click should update internal state
      act(() => {
        result.current.handleSortClick('name');
      });

      expect(result.current.sortState).toEqual({
        field: 'name',
        direction: GridSortDirection.Asc,
      });
    });

    it('should be in uncontrolled mode when only sortField is provided', () => {
      const mockOnSortChange = vi.fn();

      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
          sortField: 'name',
          // sortDirection not provided
          onSortChange: mockOnSortChange,
        }),
      );

      // Initial state should be internal (null/null), not from props
      expect(result.current.sortState).toEqual({
        field: null,
        direction: null,
      });

      // Click should update internal state
      act(() => {
        result.current.handleSortClick('name');
      });

      expect(result.current.sortState).toEqual({
        field: 'name',
        direction: GridSortDirection.Asc,
      });
    });

    it('should be in uncontrolled mode when only sortDirection is provided', () => {
      const mockOnSortChange = vi.fn();

      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
          // sortField not provided
          sortDirection: GridSortDirection.Asc,
          onSortChange: mockOnSortChange,
        }),
      );

      // Initial state should be internal (null/null), not from props
      expect(result.current.sortState).toEqual({
        field: null,
        direction: null,
      });

      // Click should update internal state
      act(() => {
        result.current.handleSortClick('name');
      });

      expect(result.current.sortState).toEqual({
        field: 'name',
        direction: GridSortDirection.Asc,
      });
    });

    it('should be in controlled mode when both sortField and sortDirection provided', () => {
      const mockOnSortChange = vi.fn();

      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
          sortField: 'country',
          sortDirection: GridSortDirection.Desc,
          onSortChange: mockOnSortChange,
        }),
      );

      // State should reflect props
      expect(result.current.sortState).toEqual({
        field: 'country',
        direction: GridSortDirection.Desc,
      });

      // Click should NOT update sortState directly (controlled mode)
      act(() => {
        result.current.handleSortClick('country');
      });

      // sortState still reflects original props
      expect(result.current.sortState).toEqual({
        field: 'country',
        direction: GridSortDirection.Desc,
      });

      // But callback was invoked
      expect(mockOnSortChange).toHaveBeenCalled();
    });
  });

  describe('Data sorting behavior', () => {
    it('should sort data ascending when direction is asc', () => {
      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
          sortField: 'name',
          sortDirection: GridSortDirection.Asc,
        }),
      );

      const sortedNames = result.current.sortedData.map((item) => item.name);
      expect(sortedNames).toEqual(['Alice', 'Bob', 'Charlie']);
    });

    it('should sort data descending when direction is desc', () => {
      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
          sortField: 'name',
          sortDirection: GridSortDirection.Desc,
        }),
      );

      const sortedNames = result.current.sortedData.map((item) => item.name);
      expect(sortedNames).toEqual(['Charlie', 'Bob', 'Alice']);
    });

    it('should maintain original order when direction is null', () => {
      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
        }),
      );

      expect(result.current.sortedData).toEqual(mockData);
    });

    it('should handle case-insensitive sorting', () => {
      const mixedCaseData = [
        { id: 'row1', name: 'charlie' },
        { id: 'row2', name: 'Alice' },
        { id: 'row3', name: 'BOB' },
      ];

      const { result } = renderHook(() =>
        useGridController({
          data: mixedCaseData,
          sortField: 'name',
          sortDirection: GridSortDirection.Asc,
        }),
      );

      const sortedNames = result.current.sortedData.map((item) => item.name);
      expect(sortedNames).toEqual(['Alice', 'BOB', 'charlie']);
    });

    it('should handle empty data array', () => {
      const { result } = renderHook(() =>
        useGridController({
          data: [],
          sortField: 'name',
          sortDirection: GridSortDirection.Asc,
        }),
      );

      expect(result.current.sortedData).toEqual([]);
    });
  });

  describe('Selection functionality integration', () => {
    it('should return selection-related handlers alongside sorting', () => {
      const mockOnSelect = vi.fn();

      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
          onSelect: mockOnSelect,
        }),
      );

      expect(result.current.handleSelectAll).toBeDefined();
      expect(result.current.handleDeselectAll).toBeDefined();
      expect(result.current.handleSelectRowById).toBeDefined();
      expect(result.current.handleDeselectRowById).toBeDefined();
      expect(result.current.selectedIds).toEqual([]);
      expect(result.current.isAllSelected).toBe(false);
    });

    it('should return elementId', () => {
      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
          id: 'custom-grid-id',
        }),
      );

      expect(result.current.elementId).toBe('custom-grid-id');
    });
  });
});
