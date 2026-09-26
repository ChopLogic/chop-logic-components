import { type RefObject, useEffect, useState } from 'react';

import { useContainerDimensions } from '../use-container-dimensions/use-container-dimensions';

type UseAnchorPositionParams = {
  anchorRef: RefObject<HTMLElement | null>;
  floatingRef: RefObject<HTMLElement | null>;
  isOpened: boolean;
  spacing?: number;
};

export const useAnchorPosition = ({
  anchorRef,
  floatingRef,
  isOpened,
  spacing = 4,
}: UseAnchorPositionParams) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const { width: floatingWidth, height: floatingHeight } = useContainerDimensions({
    ref: floatingRef,
    isVisible: isOpened,
  });

  useEffect(() => {
    if (!isOpened || !anchorRef?.current) {
      return;
    }

    const updatePosition = () => {
      const rect = anchorRef.current?.getBoundingClientRect();
      if (!rect) return;

      let top = Math.round(rect.bottom + spacing);
      // Center the floating element horizontally under the anchor
      let left = Math.round(rect.left + rect.width / 2 - floatingWidth / 2);

      // Adjust position if floating element goes beyond the viewport
      if (top + floatingHeight > window.innerHeight) {
        top = Math.round(rect.top - floatingHeight - spacing);
      }
      if (left + floatingWidth > window.innerWidth) {
        left = Math.round(window.innerWidth - floatingWidth - spacing);
      }
      if (left < 0) {
        left = spacing;
      }

      setPosition({ top, left });
    };

    // Initial position calculation
    updatePosition();

    // Set up resize observer for window changes
    const resizeObserver = new ResizeObserver(updatePosition);
    resizeObserver.observe(document.documentElement);

    return () => {
      resizeObserver.disconnect();
    };
  }, [isOpened, anchorRef, floatingHeight, floatingWidth, spacing]);

  return position;
};
