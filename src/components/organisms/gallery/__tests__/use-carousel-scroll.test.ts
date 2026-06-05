import { act, renderHook } from '@testing-library/react';
import type { GalleryMode } from '@types';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { useCarouselScroll } from '../use-carousel-scroll';

// Helpers to configure a mock scroll container
const makeContainer = (scrollLeft: number, scrollWidth: number, clientWidth: number) => {
  const container = document.createElement('div');
  Object.defineProperties(container, {
    scrollLeft: { get: () => scrollLeft, configurable: true },
    scrollWidth: { get: () => scrollWidth, configurable: true },
    clientWidth: { get: () => clientWidth, configurable: true },
    scrollBy: { value: vi.fn(), configurable: true, writable: true },
  });
  return container;
};

const makeRef = (el: HTMLDivElement | null) => ({ current: el });

describe('useCarouselScroll', () => {
  let resizeObserverCallback: ResizeObserverCallback;
  let observeMock: ReturnType<typeof vi.fn>;
  let disconnectMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    observeMock = vi.fn();
    disconnectMock = vi.fn();

    // Must be a real constructor function so `new ResizeObserver(...)` works
    vi.stubGlobal('ResizeObserver', function (this: unknown, callback: ResizeObserverCallback) {
      resizeObserverCallback = callback;
      return { observe: observeMock, disconnect: disconnectMock };
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  describe('non-carousel layout', () => {
    it('returns showPrev=false and showNext=false for grid layout', () => {
      const container = makeContainer(0, 500, 300);
      const ref = makeRef(container);

      const { result } = renderHook(() => useCarouselScroll(ref, 'grid'));

      expect(result.current.showPrev).toBe(false);
      expect(result.current.showNext).toBe(false);
    });

    it('returns showPrev=false and showNext=false for masonry layout', () => {
      const container = makeContainer(0, 500, 300);
      const ref = makeRef(container);

      const { result } = renderHook(() => useCarouselScroll(ref, 'masonry'));

      expect(result.current.showPrev).toBe(false);
      expect(result.current.showNext).toBe(false);
    });

    it('resets buttons when switching from carousel to grid', () => {
      const container = makeContainer(100, 500, 300);
      const ref = makeRef(container);

      const { result, rerender } = renderHook(({ layout }) => useCarouselScroll(ref, layout), {
        initialProps: { layout: 'carousel' as GalleryMode },
      });

      // showNext should be visible initially in carousel mode
      expect(result.current.showNext).toBe(true);

      rerender({ layout: 'grid' });

      expect(result.current.showPrev).toBe(false);
      expect(result.current.showNext).toBe(false);
    });
  });

  describe('carousel layout — initial visibility', () => {
    it('shows only Next button when at the start of scrollable content', () => {
      const container = makeContainer(0, 500, 300);
      const ref = makeRef(container);

      const { result } = renderHook(() => useCarouselScroll(ref, 'carousel'));

      expect(result.current.showPrev).toBe(false);
      expect(result.current.showNext).toBe(true);
    });

    it('shows only Prev button when scrolled to the end', () => {
      // scrollLeft = scrollWidth - clientWidth = 200
      const container = makeContainer(200, 500, 300);
      const ref = makeRef(container);

      const { result } = renderHook(() => useCarouselScroll(ref, 'carousel'));

      expect(result.current.showPrev).toBe(true);
      expect(result.current.showNext).toBe(false);
    });

    it('shows both buttons when scrolled to a middle position', () => {
      const container = makeContainer(100, 500, 300);
      const ref = makeRef(container);

      const { result } = renderHook(() => useCarouselScroll(ref, 'carousel'));

      expect(result.current.showPrev).toBe(true);
      expect(result.current.showNext).toBe(true);
    });

    it('hides both buttons when content is not scrollable', () => {
      // scrollWidth === clientWidth — no overflow
      const container = makeContainer(0, 300, 300);
      const ref = makeRef(container);

      const { result } = renderHook(() => useCarouselScroll(ref, 'carousel'));

      expect(result.current.showPrev).toBe(false);
      expect(result.current.showNext).toBe(false);
    });

    it('hides both buttons when ref is null', () => {
      const ref = makeRef(null);

      const { result } = renderHook(() => useCarouselScroll(ref, 'carousel'));

      expect(result.current.showPrev).toBe(false);
      expect(result.current.showNext).toBe(false);
    });
  });

  describe('carousel layout — scroll event updates visibility', () => {
    it('shows Prev button after scrolling forward', () => {
      let scrollLeft = 0;
      const container = makeContainer(scrollLeft, 500, 300);

      // Simulate scroll: update scrollLeft and fire scroll event
      const scrollTo = (position: number) => {
        scrollLeft = position;
        Object.defineProperty(container, 'scrollLeft', { get: () => scrollLeft });
        container.dispatchEvent(new Event('scroll'));
      };

      const ref = makeRef(container);
      const { result } = renderHook(() => useCarouselScroll(ref, 'carousel'));

      expect(result.current.showPrev).toBe(false);

      act(() => scrollTo(100));

      expect(result.current.showPrev).toBe(true);
      expect(result.current.showNext).toBe(true);
    });

    it('hides Next button when scrolled to the end', () => {
      let scrollLeft = 100;
      const container = makeContainer(scrollLeft, 500, 300);

      const scrollTo = (position: number) => {
        scrollLeft = position;
        Object.defineProperty(container, 'scrollLeft', { get: () => scrollLeft });
        container.dispatchEvent(new Event('scroll'));
      };

      const ref = makeRef(container);
      const { result } = renderHook(() => useCarouselScroll(ref, 'carousel'));

      act(() => scrollTo(200)); // max position

      expect(result.current.showPrev).toBe(true);
      expect(result.current.showNext).toBe(false);
    });
  });

  describe('carousel layout — ResizeObserver integration', () => {
    it('attaches a ResizeObserver to the container', () => {
      const container = makeContainer(0, 500, 300);
      const ref = makeRef(container);

      renderHook(() => useCarouselScroll(ref, 'carousel'));

      expect(observeMock).toHaveBeenCalledWith(container);
    });

    it('updates button visibility when ResizeObserver fires', () => {
      let scrollWidth = 300; // initially not scrollable
      const container = makeContainer(0, scrollWidth, 300);

      const ref = makeRef(container);
      const { result } = renderHook(() => useCarouselScroll(ref, 'carousel'));

      expect(result.current.showNext).toBe(false);

      // Images load — container becomes wider
      scrollWidth = 500;
      Object.defineProperty(container, 'scrollWidth', { get: () => scrollWidth });

      act(() => {
        resizeObserverCallback([], {} as ResizeObserver);
      });

      expect(result.current.showNext).toBe(true);
    });

    it('disconnects ResizeObserver on unmount', () => {
      const container = makeContainer(0, 500, 300);
      const ref = makeRef(container);

      const { unmount } = renderHook(() => useCarouselScroll(ref, 'carousel'));

      unmount();

      expect(disconnectMock).toHaveBeenCalled();
    });

    it('does not attach ResizeObserver for non-carousel layouts', () => {
      const container = makeContainer(0, 500, 300);
      const ref = makeRef(container);

      renderHook(() => useCarouselScroll(ref, 'grid'));

      expect(observeMock).not.toHaveBeenCalled();
    });
  });

  describe('scrollForward and scrollBackward', () => {
    it('scrollForward calls scrollBy with positive clientWidth', () => {
      const container = makeContainer(0, 500, 300);
      const ref = makeRef(container);

      const { result } = renderHook(() => useCarouselScroll(ref, 'carousel'));

      act(() => result.current.scrollForward());

      expect(container.scrollBy).toHaveBeenCalledWith({ left: 300, behavior: 'smooth' });
    });

    it('scrollBackward calls scrollBy with negative clientWidth', () => {
      const container = makeContainer(100, 500, 300);
      const ref = makeRef(container);

      const { result } = renderHook(() => useCarouselScroll(ref, 'carousel'));

      act(() => result.current.scrollBackward());

      expect(container.scrollBy).toHaveBeenCalledWith({ left: -300, behavior: 'smooth' });
    });

    it('scrollForward does nothing when ref is null', () => {
      const ref = makeRef(null);
      const { result } = renderHook(() => useCarouselScroll(ref, 'carousel'));

      // Should not throw
      act(() => result.current.scrollForward());
    });

    it('scrollBackward does nothing when ref is null', () => {
      const ref = makeRef(null);
      const { result } = renderHook(() => useCarouselScroll(ref, 'carousel'));

      // Should not throw
      act(() => result.current.scrollBackward());
    });
  });
});
