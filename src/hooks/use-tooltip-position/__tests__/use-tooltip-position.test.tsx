import { act, renderHook, waitFor } from '@testing-library/react';
import type { RefObject } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { useTooltipPosition } from '../use-tooltip-position';

// Mock dependencies
vi.mock('../use-container-dimensions', () => ({
  useContainerDimensions: vi.fn(() => ({
    width: 100,
    height: 50,
  })),
}));

const mockObserve = vi.fn();
const mockDisconnect = vi.fn();
const mockUnobserve = vi.fn();

beforeEach(() => {
  // Reset window dimensions for each test
  window.innerWidth = 800;
  window.innerHeight = 600;

  // Reset ResizeObserver mocks
  mockObserve.mockClear();
  mockDisconnect.mockClear();
  mockUnobserve.mockClear();

  // Update ResizeObserver mock implementation
  vi.stubGlobal(
    'ResizeObserver',
    vi.fn().mockImplementation((callback) => ({
      observe: mockObserve,
      disconnect: mockDisconnect,
      unobserve: mockUnobserve,
      callback,
    })),
  );
});

describe('useTooltipPosition', () => {
  const createMockRefs = () => {
    const wrapperRef = {
      current: {
        getBoundingClientRect: () => ({
          top: 100,
          left: 100,
          bottom: 150,
          width: 200,
          height: 50,
        }),
      },
    } as RefObject<HTMLDivElement>;

    const tooltipRef = {
      current: {
        getBoundingClientRect: () => ({
          width: 100,
          height: 50,
        }),
      },
    } as RefObject<HTMLDivElement>;

    return { wrapperRef, tooltipRef };
  };

  it('should calculate correct position when tooltip fits within viewport', () => {
    const { wrapperRef, tooltipRef } = createMockRefs();

    const { result } = renderHook(() =>
      useTooltipPosition({
        wrapperRef,
        tooltipRef,
        isOpened: true,
        spacing: 8,
      }),
    );

    expect(result.current).toEqual({ top: 158, left: 100 });
  });

  it('should adjust position when tooltip overflows bottom of viewport', () => {
    const { wrapperRef, tooltipRef } = createMockRefs();

    wrapperRef.current.getBoundingClientRect = () => ({
      top: 500, // Close to bottom of the window
      left: 300,
      bottom: 550,
      right: 100,
      width: 200,
      height: 50,
      x: 0,
      y: 0,
      toJSON: vi.fn(),
    });

    const { result } = renderHook(() =>
      useTooltipPosition({
        wrapperRef,
        tooltipRef,
        isOpened: true,
        spacing: 8,
      }),
    );

    expect(result.current).toEqual({ top: 558, left: 300 });
  });

  it('should adjust position when tooltip overflows right of viewport', () => {
    const { wrapperRef, tooltipRef } = createMockRefs();

    wrapperRef.current.getBoundingClientRect = () => ({
      top: 100,
      left: 750, // Near the right edge of window
      bottom: 150,
      width: 200,
      height: 50,
      right: 100,
      x: 0,
      y: 0,
      toJSON: vi.fn(),
    });

    const { result } = renderHook(() =>
      useTooltipPosition({
        wrapperRef,
        tooltipRef,
        isOpened: true,
      }),
    );

    expect(result.current).toEqual({ top: 154, left: 750 });
  });

  it('should adjust position when tooltip overflows left of viewport', () => {
    const { wrapperRef, tooltipRef } = createMockRefs();

    // @ts-expect-error possibly null
    wrapperRef.current.getBoundingClientRect = () => ({
      top: 100,
      left: -50, // Partially off-screen to the left
      bottom: 150,
      width: 200,
      height: 50,
    });

    const { result } = renderHook(() =>
      useTooltipPosition({
        wrapperRef,
        tooltipRef,
        isOpened: true,
      }),
    );

    expect(result.current).toEqual({ top: 154, left: 4 });
  });

  it('should not calculate position when isOpened is false', () => {
    const { wrapperRef, tooltipRef } = createMockRefs();

    const { result } = renderHook(() =>
      useTooltipPosition({
        wrapperRef,
        tooltipRef,
        isOpened: false,
      }),
    );

    expect(result.current).toEqual({ top: 0, left: 0 });
    expect(mockObserve).not.toHaveBeenCalled();
  });

  it('should set up and clean up ResizeObserver when opened', () => {
    const { wrapperRef, tooltipRef } = createMockRefs();

    const { unmount } = renderHook(() =>
      useTooltipPosition({
        wrapperRef,
        tooltipRef,
        isOpened: true,
      }),
    );

    expect(mockObserve).toHaveBeenCalledWith(document.documentElement);
    expect(mockObserve).toHaveBeenCalledTimes(2);

    unmount();

    expect(mockDisconnect).toHaveBeenCalledTimes(2);
  });

  it('should recalculate position when window is resized', async () => {
    const { wrapperRef, tooltipRef } = createMockRefs();

    const { result } = renderHook(() =>
      useTooltipPosition({
        wrapperRef,
        tooltipRef,
        isOpened: true,
        spacing: 8,
      }),
    );

    expect(result.current).toEqual({ top: 158, left: 100 });

    // Get the stored callback from the ResizeObserver constructor
    const resizeCallback = vi.mocked(window.ResizeObserver).mock
      .calls[0][0] as ResizeObserverCallback;

    // Simulate resize event
    window.innerWidth = 400; // Smaller window width
    const entry = { contentRect: { width: 400, height: 600 } } as ResizeObserverEntry;

    act(() => {
      resizeCallback([entry], {} as ResizeObserver);
    });

    await waitFor(() => {
      expect(result.current).toEqual({ top: 158, left: 100 });
    });
  });
});
