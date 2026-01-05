import { renderHook, waitFor } from '@testing-library/react';
import type { RefObject } from 'react';
import { useRef } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { useIsHovered } from '../use-is-hovered';

describe('useIsHovered', () => {
  let mockElement: HTMLElement;

  beforeEach(() => {
    mockElement = document.createElement('div');
    document.body.appendChild(mockElement);
  });

  afterEach(() => {
    document.body.removeChild(mockElement);
  });

  it('returns false initially', () => {
    const { result } = renderHook(() => {
      const ref = useRef<HTMLElement>(mockElement);
      return useIsHovered(ref);
    });

    expect(result.current).toBe(false);
  });

  it('returns true on mouseenter', async () => {
    const { result } = renderHook(() => {
      const ref = useRef<HTMLElement>(mockElement);
      return useIsHovered(ref);
    });

    mockElement.dispatchEvent(new MouseEvent('mouseenter'));
    await waitFor(() => {
      expect(result.current).toBe(true);
    });
  });

  it('returns false on mouseleave', async () => {
    const { result } = renderHook(() => {
      const ref = useRef<HTMLElement>(mockElement);
      return useIsHovered(ref);
    });

    mockElement.dispatchEvent(new MouseEvent('mouseenter'));
    await waitFor(() => {
      expect(result.current).toBe(true);
    });

    mockElement.dispatchEvent(new MouseEvent('mouseleave'));
    await waitFor(() => {
      expect(result.current).toBe(false);
    });
  });

  it('handles null ref', () => {
    const { result } = renderHook(() => {
      const ref = useRef<HTMLElement>(null);
      return useIsHovered(ref as RefObject<HTMLElement>);
    });

    expect(result.current).toBe(false);
  });

  it('cleans up event listeners on unmount', () => {
    const { unmount } = renderHook(() => {
      const ref = useRef<HTMLElement>(mockElement);
      return useIsHovered(ref);
    });

    const removeEventListenerSpy = vi.spyOn(mockElement, 'removeEventListener');
    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('mouseenter', expect.any(Function));
    expect(removeEventListenerSpy).toHaveBeenCalledWith('mouseleave', expect.any(Function));
  });
});
