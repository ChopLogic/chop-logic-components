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

  describe('Initial State', () => {
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

    it('returns 100% when not opened', () => {
      const onClose = vi.fn();
      const { result } = renderHook(() =>
        useRemainingTimer({
          isOpened: false,
          isHovered: false,
          onClose,
          autoCloseDelay: 1000,
        }),
      );

      expect(result.current).toBe(100);
    });

    it('returns 100% when autoClose is false', () => {
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
  });

  describe('autoClose Flag Behavior', () => {
    it('does not decrement when autoClose is false', () => {
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

      act(() => {
        vi.advanceTimersByTime(500);
      });

      expect(result.current).toBe(100);
      expect(onClose).not.toHaveBeenCalled();
    });

    it('ignores other props when autoClose is false', () => {
      const onClose = vi.fn();
      const { result, rerender } = renderHook(
        ({ isOpened }) =>
          useRemainingTimer({
            isOpened,
            isHovered: false,
            onClose,
            autoCloseDelay: 500,
            autoClose: false,
          }),
        { initialProps: { isOpened: true } },
      );

      act(() => {
        vi.advanceTimersByTime(1000);
      });

      expect(result.current).toBe(100);
      expect(onClose).not.toHaveBeenCalled();

      rerender({ isOpened: false });

      expect(result.current).toBe(100);
      expect(onClose).not.toHaveBeenCalled();
    });
  });

  describe('Timer Countdown', () => {
    it('decrements timer over time', () => {
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

      act(() => {
        vi.advanceTimersByTime(250);
      });

      expect(result.current).toBeGreaterThan(70);
      expect(result.current).toBeLessThan(80);

      act(() => {
        vi.advanceTimersByTime(250);
      });

      expect(result.current).toBeGreaterThan(45);
      expect(result.current).toBeLessThan(55);

      act(() => {
        vi.advanceTimersByTime(250);
      });

      expect(result.current).toBeGreaterThan(20);
      expect(result.current).toBeLessThan(30);

      expect(onClose).not.toHaveBeenCalled();
    });

    it('calls onClose when timer reaches zero', () => {
      const onClose = vi.fn();
      renderHook(() =>
        useRemainingTimer({
          isOpened: true,
          isHovered: false,
          onClose,
          autoCloseDelay: 100,
        }),
      );

      act(() => {
        vi.advanceTimersByTime(120);
      });

      expect(onClose).toHaveBeenCalledOnce();
    });

    it('calls onClose only once', () => {
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
        vi.advanceTimersByTime(2000);
      });

      expect(onClose).toHaveBeenCalledOnce();
    });

    it('works with custom autoCloseDelay', () => {
      const onClose = vi.fn();
      renderHook(() =>
        useRemainingTimer({
          isOpened: true,
          isHovered: false,
          onClose,
          autoCloseDelay: 100,
        }),
      );

      act(() => {
        vi.advanceTimersByTime(120);
      });

      expect(onClose).toHaveBeenCalledOnce();
    });

    it('clamps percentage to zero', () => {
      const onClose = vi.fn();
      const { result } = renderHook(() =>
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

      // After onClose is called, percentage should be at or below zero
      expect(result.current).toBeLessThanOrEqual(0);
    });
  });

  describe('Hover Behavior', () => {
    it('pauses timer when hovered', () => {
      const onClose = vi.fn();
      const { result, rerender } = renderHook(
        ({ isHovered }) =>
          useRemainingTimer({
            isOpened: true,
            isHovered,
            onClose,
            autoCloseDelay: 1000,
          }),
        { initialProps: { isHovered: false } },
      );

      act(() => {
        vi.advanceTimersByTime(300);
      });

      const percentBeforeHover = result.current;
      expect(percentBeforeHover).toBeLessThan(100);
      expect(percentBeforeHover).toBeGreaterThan(50);

      // Now hover
      rerender({ isHovered: true });

      act(() => {
        vi.advanceTimersByTime(500);
      });

      // Percentage should remain the same while hovering
      expect(onClose).not.toHaveBeenCalled();
    });

    it('resumes timer when hover ends', () => {
      const onClose = vi.fn();
      const { result, rerender } = renderHook(
        ({ isHovered }) =>
          useRemainingTimer({
            isOpened: true,
            isHovered,
            onClose,
            autoCloseDelay: 2000,
          }),
        { initialProps: { isHovered: false } },
      );

      act(() => {
        vi.advanceTimersByTime(400);
      });

      const percentBeforeHover = result.current;

      rerender({ isHovered: true });

      act(() => {
        vi.advanceTimersByTime(600);
      });

      // Still paused, so percentage should not have decreased
      expect(onClose).not.toHaveBeenCalled();

      rerender({ isHovered: false });

      act(() => {
        vi.advanceTimersByTime(400);
      });

      // Timer should have resumed after unhover
      const percentAfterResume = result.current;
      expect(percentAfterResume).toBeLessThan(percentBeforeHover);
    });

    it('prevents timer from completing while hovering state is true', () => {
      const onClose = vi.fn();
      renderHook(() =>
        useRemainingTimer({
          isOpened: true,
          isHovered: true,
          onClose,
          autoCloseDelay: 100,
        }),
      );

      // Even after delay elapses, timer should not fire while hovering
      act(() => {
        vi.advanceTimersByTime(500);
      });

      expect(onClose).not.toHaveBeenCalled();
    });
  });
});
