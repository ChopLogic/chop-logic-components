import { renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { useInputFocus } from '../useInputFocus';

// Mock HTMLElement methods
const mockFocus = vi.fn();
const mockSelect = vi.fn();

const createMockRef = (hasCurrent: boolean = true) => ({
  current: hasCurrent
    ? ({
        focus: mockFocus,
        select: mockSelect,
      } as unknown as HTMLInputElement)
    : null,
});

describe('useInputFocus', () => {
  beforeEach(() => {
    mockFocus.mockClear();
    mockSelect.mockClear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should focus input when entering edit mode', () => {
    const mockRef = createMockRef();

    renderHook(() => useInputFocus(mockRef, true, false, false));

    expect(mockFocus).toHaveBeenCalledTimes(1);
    expect(mockSelect).not.toHaveBeenCalled();
  });

  it('should focus and select input when autoSelect is enabled', () => {
    const mockRef = createMockRef();

    renderHook(() => useInputFocus(mockRef, true, true, false));

    expect(mockFocus).toHaveBeenCalledTimes(1);
    expect(mockSelect).toHaveBeenCalledTimes(1);
  });

  it('should not focus when not in edit mode', () => {
    const mockRef = createMockRef();

    renderHook(() => useInputFocus(mockRef, false, true, false));

    expect(mockFocus).not.toHaveBeenCalled();
    expect(mockSelect).not.toHaveBeenCalled();
  });

  it('should not focus when read-only', () => {
    const mockRef = createMockRef();

    renderHook(() => useInputFocus(mockRef, true, true, true));

    expect(mockFocus).not.toHaveBeenCalled();
    expect(mockSelect).not.toHaveBeenCalled();
  });

  it('should not focus when ref.current is null', () => {
    const mockRef = createMockRef(false);

    renderHook(() => useInputFocus(mockRef, true, true, false));

    expect(mockFocus).not.toHaveBeenCalled();
    expect(mockSelect).not.toHaveBeenCalled();
  });

  it('should re-focus when edit mode changes', () => {
    const mockRef = createMockRef();
    const { rerender } = renderHook(
      ({ editMode }) => useInputFocus(mockRef, editMode, false, false),
      {
        initialProps: { editMode: false },
      },
    );

    expect(mockFocus).not.toHaveBeenCalled();

    rerender({ editMode: true });

    expect(mockFocus).toHaveBeenCalledTimes(1);

    rerender({ editMode: false });
    rerender({ editMode: true });

    expect(mockFocus).toHaveBeenCalledTimes(2);
  });

  it('should re-focus when autoSelect changes', () => {
    const mockRef = createMockRef();
    const { rerender } = renderHook(
      ({ autoSelect }) => useInputFocus(mockRef, true, autoSelect, false),
      {
        initialProps: { autoSelect: false },
      },
    );

    expect(mockFocus).toHaveBeenCalledTimes(1);
    expect(mockSelect).not.toHaveBeenCalled();

    rerender({ autoSelect: true });

    expect(mockFocus).toHaveBeenCalledTimes(2);
    expect(mockSelect).toHaveBeenCalledTimes(1);
  });
});
