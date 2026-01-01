import { act, renderHook, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useValueState } from '../useValueState';

describe('useValueState', () => {
  it('should initialize with provided value', () => {
    const { result } = renderHook(() => useValueState('initial'));

    expect(result.current.internalValue).toBe('initial');
  });

  it('should sync internal value when prop value changes', () => {
    const { result, rerender } = renderHook(({ value }) => useValueState(value), {
      initialProps: { value: 'initial' },
    });

    expect(result.current.internalValue).toBe('initial');

    rerender({ value: 'updated' });

    expect(result.current.internalValue).toBe('updated');
  });

  it('should update internal value', () => {
    const { result } = renderHook(() => useValueState('initial'));

    act(() => {
      result.current.updateValue('new value');
    });

    expect(result.current.internalValue).toBe('new value');
  });

  it('should commit value when changed', () => {
    const onChange = vi.fn();
    const { result } = renderHook(() => useValueState('initial', onChange));

    act(() => {
      result.current.updateValue('new value');
    });

    act(() => {
      result.current.commitValue();
    });

    expect(onChange).toHaveBeenCalledWith('new value');
  });

  it('should not commit value when unchanged', () => {
    const onChange = vi.fn();
    const { result } = renderHook(() => useValueState('initial', onChange));

    act(() => {
      result.current.commitValue();
    });

    expect(onChange).not.toHaveBeenCalled();
  });

  it('should reset to original value', () => {
    const { result } = renderHook(() => useValueState('initial'));

    act(() => {
      result.current.updateValue('modified');
    });
    expect(result.current.internalValue).toBe('modified');

    act(() => {
      result.current.resetValue();
    });

    expect(result.current.internalValue).toBe('initial');
  });

  it('should handle undefined onChange callback', () => {
    const { result } = renderHook(() => useValueState('initial'));

    act(() => {
      result.current.updateValue('new value');
    });

    // Should not throw when onChange is undefined
    expect(() => {
      act(() => {
        result.current.commitValue();
      });
    }).not.toThrow();
  });

  it('should handle multiple updates and reset', () => {
    const onChange = vi.fn();
    const { result } = renderHook(() => useValueState('start', onChange));

    act(() => {
      result.current.updateValue('first');
      result.current.updateValue('second');
    });

    expect(result.current.internalValue).toBe('second');

    act(() => {
      result.current.resetValue();
    });

    expect(result.current.internalValue).toBe('start');
    expect(onChange).not.toHaveBeenCalled();

    act(() => {
      result.current.updateValue('final');
      result.current.commitValue();
    });

    waitFor(() => {
      expect(onChange).toHaveBeenCalledWith('final');
    });
  });
});
