import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { usePrefersReducedMotion } from '../use-prefers-reduced-motion';

describe('usePrefersReducedMotion', () => {
  let listeners: ((event: MediaQueryListEvent) => void)[] = [];
  let matchesMock = false;

  const mockMatchMedia = (matches: boolean) => {
    matchesMock = matches;
    return vi.fn().mockImplementation(() => ({
      matches: matchesMock,
      addEventListener: (_event: string, callback: (event: MediaQueryListEvent) => void) => {
        listeners.push(callback);
      },
      removeEventListener: (_event: string, callback: (event: MediaQueryListEvent) => void) => {
        listeners = listeners.filter((l) => l !== callback);
      },
    }));
  };

  beforeEach(() => {
    listeners = [];
    matchesMock = false;
    window.matchMedia = mockMatchMedia(false);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns false when reduced motion is not preferred', () => {
    window.matchMedia = mockMatchMedia(false);
    const { result } = renderHook(() => usePrefersReducedMotion());

    expect(result.current).toBe(false);
  });

  it('returns true when reduced motion is preferred', () => {
    window.matchMedia = mockMatchMedia(true);
    const { result } = renderHook(() => usePrefersReducedMotion());

    expect(result.current).toBe(true);
  });

  it('updates when preference changes', () => {
    window.matchMedia = mockMatchMedia(false);
    const { result } = renderHook(() => usePrefersReducedMotion());

    expect(result.current).toBe(false);

    act(() => {
      matchesMock = true;
      for (const listener of listeners) {
        listener({ matches: true } as MediaQueryListEvent);
      }
    });

    expect(result.current).toBe(true);
  });

  it('removes event listener on unmount', () => {
    window.matchMedia = mockMatchMedia(false);
    const { unmount } = renderHook(() => usePrefersReducedMotion());

    expect(listeners.length).toBe(1);

    unmount();

    expect(listeners.length).toBe(0);
  });
});
