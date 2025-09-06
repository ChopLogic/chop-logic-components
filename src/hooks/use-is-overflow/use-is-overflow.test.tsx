import { renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { useIsOverflow } from './use-is-overflow';

const mockElement = (scroll: number, client: number) => ({
  scrollWidth: scroll,
  scrollHeight: scroll,
  clientWidth: client,
  clientHeight: client,
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
});

describe('useIsOverflow hook', () => {
  beforeEach(() => {
    window.addEventListener = vi.fn();
    window.removeEventListener = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should return false when element is not overflowed (width)', () => {
    const mockRef = {
      current: mockElement(100, 100) as unknown as HTMLElement,
    };

    const { result } = renderHook(() => useIsOverflow({ ref: mockRef, dimension: 'width', isMounted: true }));

    expect(result.current).toBe(false);
  });

  it('should return true when element is overflowed (width)', () => {
    const mockRef = {
      current: mockElement(150, 100) as unknown as HTMLElement,
    };

    const { result } = renderHook(() => useIsOverflow({ ref: mockRef, dimension: 'width', isMounted: true }));

    expect(result.current).toBe(true);
  });

  it('should return false when element is not overflowed (height)', () => {
    const mockRef = {
      current: mockElement(100, 100) as unknown as HTMLElement,
    };

    const { result } = renderHook(() => useIsOverflow({ ref: mockRef, dimension: 'height', isMounted: true }));

    expect(result.current).toBe(false);
  });

  it('should return true when element is overflowed (height)', () => {
    const mockRef = {
      current: mockElement(150, 100) as unknown as HTMLElement,
    };

    const { result } = renderHook(() => useIsOverflow({ ref: mockRef, dimension: 'height', isMounted: true }));

    expect(result.current).toBe(true);
  });

  it('should not check overflow when isMounted is false', () => {
    const mockRef = {
      current: mockElement(150, 100) as unknown as HTMLElement,
    };

    const { result } = renderHook(() => useIsOverflow({ ref: mockRef, dimension: 'width', isMounted: false }));

    expect(result.current).toBe(false);
  });

  it('should handle null ref.current', () => {
    const mockRef = {
      current: null,
    };

    const { result } = renderHook(() => useIsOverflow({ ref: mockRef, dimension: 'width', isMounted: true }));

    expect(result.current).toBe(false);
  });

  it('should add and remove resize event listener', () => {
    const mockRef = {
      current: mockElement(100, 100) as unknown as HTMLElement,
    };

    const { unmount } = renderHook(() => useIsOverflow({ ref: mockRef, dimension: 'width', isMounted: true }));

    expect(window.addEventListener).toHaveBeenCalledWith('resize', expect.any(Function));

    unmount();

    expect(window.removeEventListener).toHaveBeenCalledWith('resize', expect.any(Function));
  });
});
