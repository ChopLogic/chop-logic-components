import { GridFilterType, GridSortDirection } from '@enums';
import { act, renderHook } from '@testing-library/react';
import type { GridFilterCondition, GridFilterState } from '@types';
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

describe('useGridController - Filter State Management', () => {
  const mockData = [
    { id: 'row1', name: 'Charlie', country: 'Germany' },
    { id: 'row2', name: 'Alice', country: 'Mexico' },
    { id: 'row3', name: 'Bob', country: 'Austria' },
  ];

  const createCondition = (
    value: string,
    type: GridFilterType = GridFilterType.Includes,
    caseSensitive = false,
  ): GridFilterCondition => ({
    type,
    value,
    caseSensitive,
  });

  describe('Initial filter state', () => {
    it('should initialize filterState as empty object when no filterState prop', () => {
      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
        }),
      );

      expect(result.current.filterState).toEqual({});
    });

    it('should return filteredAndSortedData equal to original data when no filter applied', () => {
      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
        }),
      );

      expect(result.current.filteredAndSortedData).toEqual(mockData);
    });

    it('should initialize isEmpty as false when data has rows and no filters', () => {
      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
        }),
      );

      expect(result.current.isEmpty).toBe(false);
    });
  });

  describe('Uncontrolled filter mode (no filterState prop)', () => {
    it('should update internal filterState when handleApplyFilter is called', () => {
      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
        }),
      );

      act(() => {
        result.current.handleApplyFilter('name', createCondition('Alice'));
      });

      expect(result.current.filterState).toEqual({
        name: [createCondition('Alice')],
      });
    });

    it('should append conditions when multiple filters applied to same column', () => {
      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
        }),
      );

      act(() => {
        result.current.handleApplyFilter('name', createCondition('A', GridFilterType.StartsWith));
      });
      act(() => {
        result.current.handleApplyFilter('name', createCondition('ice', GridFilterType.Includes));
      });

      expect(result.current.filterState.name).toHaveLength(2);
      expect(result.current.filterState.name[0].value).toBe('A');
      expect(result.current.filterState.name[1].value).toBe('ice');
    });

    it('should filter data based on applied conditions', () => {
      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
        }),
      );

      act(() => {
        result.current.handleApplyFilter('name', createCondition('Alice', GridFilterType.Equals));
      });

      expect(result.current.filteredAndSortedData).toHaveLength(1);
      expect(result.current.filteredAndSortedData[0].name).toBe('Alice');
    });

    it('should invoke onFilterChange with new state when provided', () => {
      const mockOnFilterChange = vi.fn();

      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
          onFilterChange: mockOnFilterChange,
        }),
      );

      const condition = createCondition('test');

      act(() => {
        result.current.handleApplyFilter('name', condition);
      });

      expect(mockOnFilterChange).toHaveBeenCalledWith({
        name: [condition],
      });
    });

    it('should clear filter conditions for a specific column', () => {
      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
        }),
      );

      act(() => {
        result.current.handleApplyFilter('name', createCondition('A'));
        result.current.handleApplyFilter('country', createCondition('G'));
      });

      act(() => {
        result.current.handleClearFilter('name');
      });

      expect(result.current.filterState.name).toBeUndefined();
      expect(result.current.filterState.country).toHaveLength(1);
    });

    it('should no-op when clearing a column with no conditions', () => {
      const mockOnFilterChange = vi.fn();

      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
          onFilterChange: mockOnFilterChange,
        }),
      );

      act(() => {
        result.current.handleClearFilter('name');
      });

      expect(mockOnFilterChange).not.toHaveBeenCalled();
      expect(result.current.filterState).toEqual({});
    });

    it('should only clear the specified column, leaving others unchanged', () => {
      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
        }),
      );

      act(() => {
        result.current.handleApplyFilter('name', createCondition('A'));
        result.current.handleApplyFilter('country', createCondition('G'));
      });

      act(() => {
        result.current.handleClearFilter('name');
      });

      expect(result.current.filterState).toEqual({
        country: [createCondition('G')],
      });
    });
  });

  describe('Controlled filter mode (filterState prop provided) - Req 9.3, 9.4', () => {
    it('should reflect filterState from provided props, not internal state', () => {
      const externalFilterState: GridFilterState = {
        name: [createCondition('Alice')],
      };

      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
          filterState: externalFilterState,
        }),
      );

      expect(result.current.filterState).toEqual(externalFilterState);
    });

    it('should derive displayed rows exclusively from filterState prop', () => {
      const externalFilterState: GridFilterState = {
        name: [createCondition('Alice', GridFilterType.Equals)],
      };

      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
          filterState: externalFilterState,
        }),
      );

      expect(result.current.filteredAndSortedData).toHaveLength(1);
      expect(result.current.filteredAndSortedData[0].name).toBe('Alice');
    });

    it('should NOT update internal state when handleApplyFilter is called', () => {
      const mockOnFilterChange = vi.fn();
      const externalFilterState: GridFilterState = {
        name: [createCondition('Alice')],
      };

      const { result, rerender } = renderHook(
        ({ filterState }) =>
          useGridController({
            data: mockData,
            filterState,
            onFilterChange: mockOnFilterChange,
          }),
        {
          initialProps: { filterState: externalFilterState },
        },
      );

      act(() => {
        result.current.handleApplyFilter('name', createCondition('Bob'));
      });

      // filterState should still reflect props
      expect(result.current.filterState).toEqual(externalFilterState);

      // Callback should be invoked with computed next state
      expect(mockOnFilterChange).toHaveBeenCalledWith({
        name: [createCondition('Alice'), createCondition('Bob')],
      });

      // Simulate parent updating props in response to callback
      const updatedFilterState: GridFilterState = {
        name: [createCondition('Alice'), createCondition('Bob')],
      };
      rerender({ filterState: updatedFilterState });

      expect(result.current.filterState).toEqual(updatedFilterState);
    });

    it('should leave displayed rows unchanged when onFilterChange not provided', () => {
      const externalFilterState: GridFilterState = {
        name: [createCondition('Alice', GridFilterType.Equals)],
      };

      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
          filterState: externalFilterState,
          // no onFilterChange
        }),
      );

      const initialData = result.current.filteredAndSortedData;

      act(() => {
        result.current.handleApplyFilter('name', createCondition('Bob'));
      });

      // Rows should remain unchanged because the prop wasn't updated
      expect(result.current.filteredAndSortedData).toEqual(initialData);
      expect(result.current.filteredAndSortedData).toHaveLength(1);
    });

    it('should invoke onFilterChange when clearing in controlled mode', () => {
      const mockOnFilterChange = vi.fn();
      const externalFilterState: GridFilterState = {
        name: [createCondition('Alice')],
        country: [createCondition('G')],
      };

      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
          filterState: externalFilterState,
          onFilterChange: mockOnFilterChange,
        }),
      );

      act(() => {
        result.current.handleClearFilter('name');
      });

      expect(mockOnFilterChange).toHaveBeenCalledWith({
        country: [createCondition('G')],
      });
    });
  });

  describe('Filter-before-sort pipeline', () => {
    it('should apply filtering before sorting', () => {
      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
          sortField: 'name',
          sortDirection: GridSortDirection.Asc,
        }),
      );

      // Initially sorted: Alice, Bob, Charlie
      expect(result.current.filteredAndSortedData.map((d) => d.name)).toEqual([
        'Alice',
        'Bob',
        'Charlie',
      ]);

      act(() => {
        // Filter to only names containing 'li'
        result.current.handleApplyFilter('name', createCondition('li'));
      });

      // Only Alice and Charlie match; sorted ascending: Alice, Charlie
      expect(result.current.filteredAndSortedData).toHaveLength(2);
      expect(result.current.filteredAndSortedData.map((d) => d.name)).toEqual(['Alice', 'Charlie']);
    });

    it('should order only retained rows according to the sort', () => {
      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
          sortField: 'name',
          sortDirection: GridSortDirection.Desc,
        }),
      );

      act(() => {
        // Filter to exclude Bob
        result.current.handleApplyFilter('name', createCondition('Bob', GridFilterType.Equals));
      });

      // Only Bob matches, descending order
      expect(result.current.filteredAndSortedData).toHaveLength(1);
      expect(result.current.filteredAndSortedData[0].name).toBe('Bob');

      act(() => {
        result.current.handleClearFilter('name');
      });

      // All rows now, sorted descending
      expect(result.current.filteredAndSortedData.map((d) => d.name)).toEqual([
        'Charlie',
        'Bob',
        'Alice',
      ]);
    });
  });

  describe('Empty state derivation', () => {
    it('should set isEmpty to true when data has rows, filters are active, and result is empty', () => {
      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
        }),
      );

      act(() => {
        // Filter that matches nothing
        result.current.handleApplyFilter('name', createCondition('NoMatch', GridFilterType.Equals));
      });

      expect(result.current.isEmpty).toBe(true);
      expect(result.current.filteredAndSortedData).toHaveLength(0);
    });

    it('should set isEmpty to false when data is originally empty', () => {
      const { result } = renderHook(() =>
        useGridController({
          data: [],
        }),
      );

      expect(result.current.isEmpty).toBe(false);
    });

    it('should set isEmpty to false when no active filters', () => {
      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
        }),
      );

      expect(result.current.isEmpty).toBe(false);
    });

    it('should set isEmpty to false when filters exist but rows are retained', () => {
      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
        }),
      );

      act(() => {
        result.current.handleApplyFilter('name', createCondition('Alice', GridFilterType.Equals));
      });

      expect(result.current.isEmpty).toBe(false);
      expect(result.current.filteredAndSortedData).toHaveLength(1);
    });

    it('should treat blank/whitespace-only filter values as inactive for isEmpty check', () => {
      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
          filterState: {
            name: [createCondition('   ')],
          },
        }),
      );

      // Whitespace-only condition is inactive, so isEmpty should be false
      expect(result.current.isEmpty).toBe(false);
      // All rows should be returned since the condition is inactive
      expect(result.current.filteredAndSortedData).toHaveLength(3);
    });
  });

  describe('Mode detection for filtering', () => {
    it('should be in uncontrolled filter mode when filterState prop is not provided', () => {
      const mockOnFilterChange = vi.fn();

      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
          onFilterChange: mockOnFilterChange,
        }),
      );

      act(() => {
        result.current.handleApplyFilter('name', createCondition('test'));
      });

      // Should update internal state
      expect(result.current.filterState).toEqual({
        name: [createCondition('test')],
      });

      // And also call the callback
      expect(mockOnFilterChange).toHaveBeenCalled();
    });

    it('should be in controlled filter mode when filterState prop is provided', () => {
      const mockOnFilterChange = vi.fn();
      const externalFilterState: GridFilterState = {};

      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
          filterState: externalFilterState,
          onFilterChange: mockOnFilterChange,
        }),
      );

      act(() => {
        result.current.handleApplyFilter('name', createCondition('test'));
      });

      // filterState should remain as provided (controlled mode doesn't update internal state)
      expect(result.current.filterState).toEqual({});

      // But callback should be invoked
      expect(mockOnFilterChange).toHaveBeenCalled();
    });

    it('should be in controlled filter mode even with empty filterState object', () => {
      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
          filterState: {},
        }),
      );

      act(() => {
        result.current.handleApplyFilter('name', createCondition('test'));
      });

      // In controlled mode, internal state doesn't change
      expect(result.current.filterState).toEqual({});
    });
  });

  describe('Combined sort and filter state', () => {
    it('should maintain both sort and filter states independently', () => {
      const mockOnSortChange = vi.fn();
      const mockOnFilterChange = vi.fn();

      const { result } = renderHook(() =>
        useGridController({
          data: mockData,
          onSortChange: mockOnSortChange,
          onFilterChange: mockOnFilterChange,
        }),
      );

      // Apply filter
      act(() => {
        result.current.handleApplyFilter('name', createCondition('Alice', GridFilterType.Equals));
      });

      // Apply sort
      act(() => {
        result.current.handleSortClick('name');
      });

      expect(result.current.filterState).toEqual({
        name: [createCondition('Alice', GridFilterType.Equals)],
      });
      expect(result.current.sortState).toEqual({
        field: 'name',
        direction: GridSortDirection.Asc,
      });

      expect(mockOnFilterChange).toHaveBeenCalled();
      expect(mockOnSortChange).toHaveBeenCalled();
    });
  });
});
