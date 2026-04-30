import { act, renderHook } from '@testing-library/react';
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';

import { useRemainingTimer } from '../use-remaining-timer';

describe('useRemainingTimer (open/close, cleanup, deps, edge)', () => {
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

  describe('Open/Close Behavior', () => {
    it('resets timer when closed', () => {
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

      expect(result.current).toBeGreaterThan(40);
      expect(result.current).toBeLessThan(60);

      rerender({ isOpened: false });

      expect(result.current).toBe(100);
      expect(onClose).not.toHaveBeenCalled();
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

    it('resets elapsed time when closed', () => {
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
        vi.advanceTimersByTime(300);
      });

      expect(result.current).toBeLessThan(100);
      expect(result.current).toBeGreaterThan(50);

      rerender({ isOpened: false });

      expect(result.current).toBe(100);

      // Reopen and verify timer restarts from 100%
      rerender({ isOpened: true });

      expect(result.current).toBe(100);

      act(() => {
        vi.advanceTimersByTime(300);
      });

      expect(result.current).toBeLessThan(100);
      expect(result.current).toBeGreaterThan(50);
    });

    it('starts fresh timer on reopening', () => {
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
      rerender({ isOpened: true });

      act(() => {
        vi.advanceTimersByTime(600);
      });

      // Should have counted 600ms from reopen, not 1100ms total
      expect(result.current).toBeGreaterThan(35);
      expect(result.current).toBeLessThan(45);
      expect(onClose).not.toHaveBeenCalled();
    });
  });

  describe('Effect Cleanup', () => {
    it('cancels animation frame on unmount', () => {
      const onClose = vi.fn();
      const { unmount } = renderHook(() =>
        useRemainingTimer({
          isOpened: true,
          isHovered: false,
          onClose,
          autoCloseDelay: 100000,
        }),
      );

      act(() => {
        vi.advanceTimersByTime(100);
      });

      unmount();

      // After unmount, the hook is cleaned up
      act(() => {
        vi.advanceTimersByTime(100);
      });

      expect(onClose).not.toHaveBeenCalled();
    });

    it('resets state when component closes', () => {
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

      // Let timer start
      act(() => {
        vi.advanceTimersByTime(200);
      });

      expect(result.current).toBeLessThan(100);

      // Close the component
      rerender({ isOpened: false });

      // State should reset to 100
      expect(result.current).toBe(100);
    });
  });

  describe('Dependency Changes', () => {
    it('updates timer when autoCloseDelay dependency changes', () => {
      const onClose = vi.fn();
      const { rerender } = renderHook(
        ({ autoCloseDelay }) =>
          useRemainingTimer({
            isOpened: true,
            isHovered: false,
            onClose,
            autoCloseDelay,
          }),
        { initialProps: { autoCloseDelay: 1000 } },
      );

      act(() => {
        vi.advanceTimersByTime(100);
      });

      // Change the delay - effect should rerun
      rerender({ autoCloseDelay: 2000 });

      // Timer should continue working with new delay
      act(() => {
        vi.advanceTimersByTime(100);
      });

      expect(onClose).not.toHaveBeenCalled();
    });

    it('uses new onClose callback when dependency changes', () => {
      const onClose1 = vi.fn();
      const onClose2 = vi.fn();

      const { rerender } = renderHook(
        ({ onClose }) =>
          useRemainingTimer({
            isOpened: true,
            isHovered: false,
            onClose,
            autoCloseDelay: 200,
          }),
        { initialProps: { onClose: onClose1 } },
      );

      act(() => {
        vi.advanceTimersByTime(50);
      });

      // Switch callback before timer completes
      rerender({ onClose: onClose2 });

      act(() => {
        vi.advanceTimersByTime(200);
      });

      // New callback should have been called when timer completes
      expect(onClose2).toHaveBeenCalledOnce();
    });
  });

  describe('Edge Cases', () => {
    it('handles very small delays', () => {
      const onClose = vi.fn();
      renderHook(() =>
        useRemainingTimer({
          isOpened: true,
          isHovered: false,
          onClose,
          autoCloseDelay: 10,
        }),
      );

      act(() => {
        vi.advanceTimersByTime(20);
      });

      expect(onClose).toHaveBeenCalledOnce();
    });

    it('handles very large delays', () => {
      const onClose = vi.fn();
      const { result } = renderHook(() =>
        useRemainingTimer({
          isOpened: true,
          isHovered: false,
          onClose,
          autoCloseDelay: 100000,
        }),
      );

      act(() => {
        vi.advanceTimersByTime(50000);
      });

      expect(result.current).toBeGreaterThan(45);
      expect(result.current).toBeLessThan(55);
      expect(onClose).not.toHaveBeenCalled();
    });

    it('handles rapidly toggling states', () => {
      const onClose = vi.fn();
      const { rerender } = renderHook(
        ({ isOpened, isHovered }) =>
          useRemainingTimer({
            isOpened,
            isHovered,
            onClose,
            autoCloseDelay: 1000,
          }),
        { initialProps: { isOpened: true, isHovered: false } },
      );

      act(() => {
        vi.advanceTimersByTime(100);
      });

      rerender({ isOpened: true, isHovered: true });

      act(() => {
        vi.advanceTimersByTime(100);
      });

      rerender({ isOpened: true, isHovered: false });

      act(() => {
        vi.advanceTimersByTime(100);
      });

      rerender({ isOpened: false, isHovered: false });

      act(() => {
        vi.advanceTimersByTime(100);
      });

      expect(onClose).not.toHaveBeenCalled();
    });

    it('handles simultaneously toggling isOpened and isHovered', () => {
      const onClose = vi.fn();
      const { rerender } = renderHook(
        ({ isOpened, isHovered }) =>
          useRemainingTimer({
            isOpened,
            isHovered,
            onClose,
            autoCloseDelay: 1000,
          }),
        { initialProps: { isOpened: true, isHovered: false } },
      );

      act(() => {
        vi.advanceTimersByTime(200);
      });

      // Close and hover simultaneously
      rerender({ isOpened: false, isHovered: true });

      act(() => {
        vi.advanceTimersByTime(500);
      });

      expect(onClose).not.toHaveBeenCalled();

      // Reopen while still hovering
      rerender({ isOpened: true, isHovered: true });

      act(() => {
        vi.advanceTimersByTime(300);
      });

      expect(onClose).not.toHaveBeenCalled();
    });
  });
});
