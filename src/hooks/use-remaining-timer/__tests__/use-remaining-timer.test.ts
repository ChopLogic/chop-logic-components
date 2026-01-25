import { act, renderHook } from '@testing-library/react';
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';

import { useRemainingTimer } from '../use-remaining-timer';

describe('useRemainingTimer', () => {
  beforeAll(() => {
    vi.useFakeTimers();
    global.requestAnimationFrame = vi.fn((cb) => {
      setTimeout(cb, 16);
      return 1;
    });
    global.cancelAnimationFrame = vi.fn();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it('returns 100% initially when opened', () => {
    const onClose = vi.fn();
    const { result } = renderHook(() =>
      useRemainingTimer({
        isOpened: true,
        isHovered: false,
        onClose,
        autoCloseDelay: 1000,
      }),
    );

    expect(result.current).toBe(100);
  });

  it('returns default value when autoClose is false', () => {
    const onClose = vi.fn();
    const { result } = renderHook(() =>
      useRemainingTimer({
        isOpened: true,
        isHovered: false,
        onClose,
        autoCloseDelay: 1000,
        autoClose: false,
      }),
    );

    expect(result.current).toBe(100);
  });

  it('pauses timer when hovered', () => {
    const onClose = vi.fn();
    renderHook(
      () =>
        useRemainingTimer({
          isOpened: true,
          isHovered: true,
          onClose,
          autoCloseDelay: 1000,
        }),
      { initialProps: { isHovered: false } },
    );

    act(() => {
      vi.advanceTimersByTime(500);
      vi.advanceTimersByTime(1000);
    });

    expect(onClose).not.toHaveBeenCalled();
  });

  it('calls onClose after delay', async () => {
    const onClose = vi.fn();
    renderHook(() =>
      useRemainingTimer({
        isOpened: true,
        isHovered: false,
        onClose,
        autoCloseDelay: 1000,
      }),
    );

    act(() => {
      vi.advanceTimersByTime(1500);
    });

    expect(onClose).toHaveBeenCalled();
  });

  it('resets when closed', () => {
    const onClose = vi.fn();
    const { result, rerender } = renderHook(
      ({ isOpened }) =>
        useRemainingTimer({
          isOpened,
          isHovered: false,
          onClose,
          autoCloseDelay: 1000,
        }),
      { initialProps: { isOpened: true } },
    );

    act(() => {
      vi.advanceTimersByTime(500);
    });

    rerender({ isOpened: false });

    expect(result.current).toBe(100);
  });

  it('does not start timer when not opened', () => {
    const onClose = vi.fn();
    renderHook(() =>
      useRemainingTimer({
        isOpened: false,
        isHovered: false,
        onClose,
        autoCloseDelay: 1000,
      }),
    );

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(onClose).not.toHaveBeenCalled();
  });
});
