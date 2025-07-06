import { renderHook, act } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { useAutoClose } from '../use-auto-close';

// Mock timers
vi.useFakeTimers();

describe('useAutoClose hook', () => {
  const mockOnClose = vi.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  afterEach(() => {
    vi.clearAllTimers();
  });

  it('should not call onClose when autoClose is false', () => {
    renderHook(() =>
      useAutoClose({
        isOpened: true,
        onClose: mockOnClose,
        autoClose: false,
      }),
    );

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(mockOnClose).not.toHaveBeenCalled();
  });

  it('should not call onClose when isOpened is false', () => {
    renderHook(() =>
      useAutoClose({
        isOpened: false,
        onClose: mockOnClose,
        autoClose: true,
      }),
    );

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(mockOnClose).not.toHaveBeenCalled();
  });

  it('should call onClose after default delay (3000ms)', () => {
    renderHook(() =>
      useAutoClose({
        isOpened: true,
        onClose: mockOnClose,
        autoClose: true,
      }),
    );

    act(() => {
      vi.advanceTimersByTime(2999);
    });
    expect(mockOnClose).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should call onClose after custom delay', () => {
    const customDelay = 4000;

    renderHook(() =>
      useAutoClose({
        isOpened: true,
        onClose: mockOnClose,
        autoClose: true,
        autoCloseDelay: customDelay,
      }),
    );

    act(() => {
      vi.advanceTimersByTime(3999);
    });
    expect(mockOnClose).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should clear timeout when unmounted', () => {
    const { unmount } = renderHook(() =>
      useAutoClose({
        isOpened: true,
        onClose: mockOnClose,
        autoClose: true,
      }),
    );

    unmount();

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(mockOnClose).not.toHaveBeenCalled();
  });

  it('should clear timeout when isOpened changes to false', () => {
    const { rerender } = renderHook(
      ({ isOpened }) =>
        useAutoClose({
          isOpened,
          onClose: mockOnClose,
          autoClose: true,
        }),
      {
        initialProps: { isOpened: true },
      },
    );

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    rerender({ isOpened: false });

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(mockOnClose).not.toHaveBeenCalled();
  });
});
