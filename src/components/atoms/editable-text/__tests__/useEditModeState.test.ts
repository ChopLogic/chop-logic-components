import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useEditModeState } from '../useEditModeState';

describe('useEditModeState', () => {
  it('should initialize with editMode false when uncontrolled', () => {
    const { result } = renderHook(() => useEditModeState());

    expect(result.current.editMode).toBe(false);
    expect(result.current.isControlled).toBe(false);
  });

  it('should use controlled value when provided', () => {
    const { result } = renderHook(() => useEditModeState(true));

    expect(result.current.editMode).toBe(true);
    expect(result.current.isControlled).toBe(true);
  });

  it('should enter edit mode when uncontrolled and not read-only', () => {
    const { result } = renderHook(() => useEditModeState(undefined, false));

    act(() => {
      result.current.enterEditMode();
    });

    expect(result.current.editMode).toBe(true);
  });

  it('should not enter edit mode when read-only', () => {
    const { result } = renderHook(() => useEditModeState(undefined, true));

    act(() => {
      result.current.enterEditMode();
    });

    expect(result.current.editMode).toBe(false);
  });

  it('should not enter edit mode when controlled', () => {
    const { result } = renderHook(() => useEditModeState(false, false));

    act(() => {
      result.current.enterEditMode();
    });

    expect(result.current.editMode).toBe(false);
  });

  it('should exit edit mode when uncontrolled', () => {
    const { result } = renderHook(() => useEditModeState());

    // First enter edit mode
    act(() => {
      result.current.enterEditMode();
    });
    expect(result.current.editMode).toBe(true);

    // Then exit
    act(() => {
      result.current.exitEditMode();
    });

    expect(result.current.editMode).toBe(false);
  });

  it('should not exit edit mode when controlled', () => {
    const { result } = renderHook(() => useEditModeState(true, false));

    act(() => {
      result.current.exitEditMode();
    });

    expect(result.current.editMode).toBe(true);
  });

  it('should handle controlled mode changes', () => {
    const { result, rerender } = renderHook(
      ({ controlledEditMode }) => useEditModeState(controlledEditMode),
      {
        initialProps: { controlledEditMode: false },
      },
    );

    expect(result.current.editMode).toBe(false);

    rerender({ controlledEditMode: true });

    expect(result.current.editMode).toBe(true);
  });
});
