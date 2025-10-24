import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useContainerDimensions } from '../use-container-dimensions';

// Mock HTMLElement properties
const mockElement = (width: number, height: number) => ({
  offsetWidth: width,
  offsetHeight: height,
});

describe('useContainerDimensions', () => {
  it('returns zero dimensions when ref is null', () => {
    const ref = { current: null };

    const { result } = renderHook(() => useContainerDimensions({ ref, isVisible: true }));

    expect(result.current).toEqual({ width: 0, height: 0 });
  });

  it('returns zero dimensions when isVisible is false', () => {
    const ref = {
      current: mockElement(100, 50) as unknown as HTMLElement,
    };

    const { result } = renderHook(() => useContainerDimensions({ ref, isVisible: false }));

    expect(result.current).toEqual({ width: 0, height: 0 });
  });

  it('returns dimensions when ref and isVisible are provided', () => {
    const ref = {
      current: mockElement(200, 100) as unknown as HTMLElement,
    };

    const { result } = renderHook(() => useContainerDimensions({ ref, isVisible: true }));

    expect(result.current).toEqual({ width: 200, height: 100 });
  });

  it('updates dimensions when isVisible changes from false to true', () => {
    const ref = {
      current: mockElement(300, 150) as unknown as HTMLElement,
    };

    const { result, rerender } = renderHook(
      ({ isVisible }) => useContainerDimensions({ ref, isVisible }),
      {
        initialProps: { isVisible: false },
      },
    );

    expect(result.current).toEqual({ width: 0, height: 0 });

    rerender({ isVisible: true });

    expect(result.current).toEqual({ width: 300, height: 150 });
  });

  it('handles zero dimensions', () => {
    const ref = {
      current: mockElement(0, 0) as unknown as HTMLElement,
    };

    const { result } = renderHook(() => useContainerDimensions({ ref, isVisible: true }));

    expect(result.current).toEqual({ width: 0, height: 0 });
  });

  it('handles large dimensions', () => {
    const ref = {
      current: mockElement(1920, 1080) as unknown as HTMLElement,
    };

    const { result } = renderHook(() => useContainerDimensions({ ref, isVisible: true }));

    expect(result.current).toEqual({ width: 1920, height: 1080 });
  });

  it('does not update when ref changes but isVisible is false', () => {
    const ref1 = {
      current: mockElement(100, 50) as unknown as HTMLElement,
    };
    const ref2 = {
      current: mockElement(200, 100) as unknown as HTMLElement,
    };

    const { result, rerender } = renderHook(
      ({ ref, isVisible }) => useContainerDimensions({ ref, isVisible }),
      {
        initialProps: { ref: ref1, isVisible: false },
      },
    );

    expect(result.current).toEqual({ width: 0, height: 0 });

    rerender({ ref: ref2, isVisible: false });

    expect(result.current).toEqual({ width: 0, height: 0 });
  });

  it('updates when ref changes and isVisible is true', () => {
    const ref1 = {
      current: mockElement(100, 50) as unknown as HTMLElement,
    };
    const ref2 = {
      current: mockElement(200, 100) as unknown as HTMLElement,
    };

    const { result, rerender } = renderHook(
      ({ ref, isVisible }) => useContainerDimensions({ ref, isVisible }),
      {
        initialProps: { ref: ref1, isVisible: true },
      },
    );

    expect(result.current).toEqual({ width: 100, height: 50 });

    rerender({ ref: ref2, isVisible: true });

    expect(result.current).toEqual({ width: 200, height: 100 });
  });

  it('handles undefined isVisible parameter', () => {
    const ref = {
      current: mockElement(150, 75) as unknown as HTMLElement,
    };

    const { result } = renderHook(
      () => useContainerDimensions({ ref }), // isVisible is undefined
    );

    // Should return zero dimensions when isVisible is undefined
    expect(result.current).toEqual({ width: 0, height: 0 });
  });

  it('maintains previous dimensions when ref becomes null', () => {
    const ref = {
      current: mockElement(100, 50) as unknown as HTMLElement,
    };

    const { result, rerender } = renderHook(
      ({ ref, isVisible }) => useContainerDimensions({ ref, isVisible }),
      {
        initialProps: { ref, isVisible: true },
      },
    );

    expect(result.current).toEqual({ width: 100, height: 50 });

    // Set ref to null
    const nullRef = { current: null as unknown as HTMLElement };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rerender({ ref: nullRef, isVisible: true });

    // Should maintain previous dimensions
    expect(result.current).toEqual({ width: 100, height: 50 });
  });
});
