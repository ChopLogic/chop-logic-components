import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { type UseDropdownSearchParams, useDropdownSearch } from '../use-dropdown-search';

const defaultParams: UseDropdownSearchParams = {
  optionsCount: 3,
  opened: true,
  isSearchable: true,
  filterQuery: '',
};

describe('useDropdownSearch', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  const advance = () => act(() => vi.advanceTimersByTime(300));

  it('has empty aria-live message and no "no matches" flag by default', () => {
    const { result } = renderHook(() => useDropdownSearch(defaultParams));

    expect(result.current.ariaLiveMessage).toBe('');
    expect(result.current.hasNoMatchingOptions).toBe(false);
  });

  it('announces plural options count', () => {
    const { result } = renderHook(() =>
      useDropdownSearch({ ...defaultParams, filterQuery: 'a', optionsCount: 2 }),
    );

    expect(result.current.ariaLiveMessage).toBe('2 options available');
  });

  it('announces singular option count', () => {
    const { result } = renderHook(() =>
      useDropdownSearch({ ...defaultParams, filterQuery: 'a', optionsCount: 1 }),
    );

    advance();
    expect(result.current.ariaLiveMessage).toBe('1 option available');
  });

  it('announces no matching options and sets flag', () => {
    const { result } = renderHook(() =>
      useDropdownSearch({ ...defaultParams, filterQuery: 'zzz', optionsCount: 0 }),
    );

    expect(result.current.hasNoMatchingOptions).toBe(true);
    advance();
    expect(result.current.ariaLiveMessage).toBe('No matching options');
  });

  it('does not flag no matches for whitespace-only query', () => {
    const { result } = renderHook(() =>
      useDropdownSearch({ ...defaultParams, filterQuery: '   ', optionsCount: 0 }),
    );

    advance();
    expect(result.current.hasNoMatchingOptions).toBe(false);
    expect(result.current.ariaLiveMessage).toBe('');
  });

  it('keeps message empty when not searchable', () => {
    const { result } = renderHook(() =>
      useDropdownSearch({ ...defaultParams, filterQuery: 'a', isSearchable: false }),
    );

    advance();
    expect(result.current.ariaLiveMessage).toBe('');
  });

  it('clears message when dropdown closes', () => {
    const { result, rerender } = renderHook((props) => useDropdownSearch(props), {
      initialProps: { ...defaultParams, filterQuery: 'a' },
    });

    advance();
    expect(result.current.ariaLiveMessage).toBe('3 options available');

    rerender({ ...defaultParams, filterQuery: 'a', opened: false });
    expect(result.current.ariaLiveMessage).toBe('');
  });

  it('clears message when query becomes empty', () => {
    const { result, rerender } = renderHook((props) => useDropdownSearch(props), {
      initialProps: { ...defaultParams, filterQuery: 'a' },
    });

    advance();
    rerender({ ...defaultParams, filterQuery: '' });
    advance();
    expect(result.current.ariaLiveMessage).toBe('');
  });

  it('calls onFilterChange and onFilterReset handlers', () => {
    const onFilterChange = vi.fn();
    const onFilterReset = vi.fn();
    const { result } = renderHook(() =>
      useDropdownSearch({ ...defaultParams, onFilterChange, onFilterReset }),
    );

    result.current.handleFilterChange('abc');
    result.current.handleFilterClear();

    expect(onFilterChange).toHaveBeenCalledWith('abc');
    expect(onFilterReset).toHaveBeenCalledTimes(1);
  });

  it('does not throw when handlers are not provided', () => {
    const { result } = renderHook(() => useDropdownSearch(defaultParams));

    expect(() => {
      result.current.handleFilterChange('abc');
      result.current.handleFilterClear();
    }).not.toThrow();
  });
});
