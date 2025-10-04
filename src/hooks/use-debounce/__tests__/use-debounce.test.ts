import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { useDebounce } from '../use-debounce';

describe('useDebounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('returns initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('initial', 100));

    expect(result.current).toBe('initial');
  });

  it('updates value after delay', () => {
    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: { value: 'initial', delay: 100 },
    });

    expect(result.current).toBe('initial');

    // Update value
    rerender({ value: 'updated', delay: 100 });

    // Should not update immediately
    expect(result.current).toBe('initial');

    // Fast-forward time
    act(() => {
      vi.advanceTimersByTime(100);
    });

    // Should now have updated value
    expect(result.current).toBe('updated');
  });

  it('cancels previous timeout when value changes quickly', () => {
    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: { value: 'first', delay: 100 },
    });

    expect(result.current).toBe('first');

    // Rapidly change values
    rerender({ value: 'second', delay: 100 });
    rerender({ value: 'third', delay: 100 });

    // Should still have initial value
    expect(result.current).toBe('first');

    // Fast-forward time
    act(() => {
      vi.advanceTimersByTime(100);
    });

    // Should have the last value
    expect(result.current).toBe('third');
  });

  it('handles different delay values', () => {
    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: { value: 'initial', delay: 200 },
    });

    rerender({ value: 'updated', delay: 200 });

    // Fast-forward less than delay
    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(result.current).toBe('initial');

    // Fast-forward to complete delay
    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(result.current).toBe('updated');
  });

  it('handles number values', () => {
    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), { initialProps: { value: 0, delay: 100 } });

    rerender({ value: 42, delay: 100 });

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(result.current).toBe(42);
  });

  it('handles object values', () => {
    const initialObj = { name: 'initial' };
    const updatedObj = { name: 'updated' };

    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: { value: initialObj, delay: 100 },
    });

    rerender({ value: updatedObj, delay: 100 });

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(result.current).toBe(updatedObj);
    expect(result.current.name).toBe('updated');
  });

  it('handles array values', () => {
    const initialArray = [1, 2, 3];
    const updatedArray = [4, 5, 6];

    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: { value: initialArray, delay: 100 },
    });

    rerender({ value: updatedArray, delay: 100 });

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(result.current).toBe(updatedArray);
    expect(result.current).toEqual([4, 5, 6]);
  });

  it('cleans up timeout on unmount', () => {
    const clearTimeoutSpy = vi.spyOn(global, 'clearTimeout');

    const { unmount } = renderHook(() => useDebounce('test', 100));

    unmount();

    expect(clearTimeoutSpy).toHaveBeenCalled();

    clearTimeoutSpy.mockRestore();
  });

  it('maintains value when delay changes but value stays same', () => {
    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: { value: 'same', delay: 100 },
    });

    rerender({ value: 'same', delay: 200 });

    // Value should remain the same even after delay change
    expect(result.current).toBe('same');

    act(() => {
      vi.advanceTimersByTime(200);
    });

    // Should still be the same
    expect(result.current).toBe('same');
  });
});
