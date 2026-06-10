import type { GalleryMode } from '@types';
import { type RefObject, useCallback, useEffect, useState } from 'react';

interface CarouselScrollState {
  showPrev: boolean;
  showNext: boolean;
  scrollForward: () => void;
  scrollBackward: () => void;
}

export const useCarouselScroll = (
  containerRef: RefObject<HTMLDivElement | null>,
  layout: GalleryMode,
): CarouselScrollState => {
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(false);

  const updateButtonVisibility = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    if (scrollWidth <= clientWidth) {
      setShowPrev(false);
      setShowNext(false);
      return;
    }

    setShowPrev(scrollLeft > 1);
    setShowNext(scrollLeft < scrollWidth - clientWidth - 1);
  }, [containerRef]);

  useEffect(() => {
    if (layout !== 'carousel') {
      setShowPrev(false);
      setShowNext(false);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    updateButtonVisibility();

    const resizeObserver = new ResizeObserver(updateButtonVisibility);
    resizeObserver.observe(container);

    container.addEventListener('scroll', updateButtonVisibility);

    return () => {
      container.removeEventListener('scroll', updateButtonVisibility);
      resizeObserver.disconnect();
    };
  }, [layout, containerRef, updateButtonVisibility]);

  const scrollForward = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
  }, [containerRef]);

  const scrollBackward = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
  }, [containerRef]);

  return { showPrev, showNext, scrollForward, scrollBackward };
};
