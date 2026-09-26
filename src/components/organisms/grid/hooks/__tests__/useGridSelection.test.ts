import { act, renderHook } from '@testing-library/react';
import type { GridItem } from '@types';
import { describe, expect, it, vi } from 'vitest';

import { useGridSelection } from '../useGridSelection';

const data: GridItem[] = [
  { id: 'row1', name: 'Alice' },
  { id: 'row2', name: 'Bob' },
  { id: 'row3', name: 'Charlie' },
];

describe('useGridSelection', () => {
  it('initializes with an empty selection', () => {
    const { result } = renderHook(() => useGridSelection({ data }));

    expect(result.current.selectedIds).toEqual([]);
    expect(result.current.isAllSelected).toBe(false);
  });

  it('selects all rows and reports isAllSelected', () => {
    const onSelect = vi.fn();
    const { result } = renderHook(() => useGridSelection({ data, onSelect }));

    act(() => result.current.handleSelectAll());

    expect(result.current.selectedIds).toEqual(['row1', 'row2', 'row3']);
    expect(result.current.isAllSelected).toBe(true);
    expect(onSelect).toHaveBeenCalledWith(['row1', 'row2', 'row3']);
  });

  it('deselects all rows', () => {
    const { result } = renderHook(() => useGridSelection({ data }));

    act(() => result.current.handleSelectAll());
    act(() => result.current.handleDeselectAll());

    expect(result.current.selectedIds).toEqual([]);
  });

  it('selects a single row by id', () => {
    const onSelect = vi.fn();
    const { result } = renderHook(() => useGridSelection({ data, onSelect }));

    act(() => result.current.handleSelectRowById('row2'));

    expect(result.current.selectedIds).toEqual(['row2']);
    expect(onSelect).toHaveBeenLastCalledWith(['row2']);
  });

  it('deselects a single row by id, keeping the others', () => {
    const onSelect = vi.fn();
    const { result } = renderHook(() => useGridSelection({ data, onSelect }));

    act(() => result.current.handleSelectAll());
    act(() => result.current.handleDeselectRowById('row2'));

    expect(result.current.selectedIds).toEqual(['row1', 'row3']);
    expect(onSelect).toHaveBeenLastCalledWith(['row1', 'row3']);
  });

  it('marks the select-all checkbox disabled when a row is disabled', () => {
    const dataWithDisabled: GridItem[] = [
      { id: 'row1', name: 'Alice' },
      { id: 'row2', name: 'Bob', disabled: true },
    ];

    const { result } = renderHook(() => useGridSelection({ data: dataWithDisabled }));

    expect(result.current.isAllCheckboxDisabled).toBe(true);
  });
});
