import { renderHook } from '@testing-library/react';
import type { RefObject } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { useTooltipPosition } from '../use-tooltip-position';

// Mock dependencies
vi.mock('../use-container-dimensions', () => ({
  useContainerDimensions: vi.fn(() => ({
    width: 100,
    height: 50,
  })),
}));

vi.mock('../use-window-dimensions', () => ({
  useWindowDimensions: vi.fn(() => ({
    width: 800,
    height: 600,
  })),
}));

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
  });
});
