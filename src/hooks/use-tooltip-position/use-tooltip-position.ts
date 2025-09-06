import { RefObject, useEffect, useState } from 'react';

import { useContainerDimensions } from '../use-container-dimensions/use-container-dimensions.ts';
import { useWindowDimensions } from '../use-window-dimensions/use-window-dimensions.ts';

type useTooltipPositionParams = {
  wrapperRef: RefObject<HTMLElement | null>;
  tooltipRef: RefObject<HTMLElement | null>;
  isOpened: boolean;
  spacing?: number;
};

export const useTooltipPosition = ({ wrapperRef, tooltipRef, isOpened, spacing = 4 }: useTooltipPositionParams) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const { width: tooltipWidth, height: tooltipHeight } = useContainerDimensions({
    ref: tooltipRef,
    isVisible: isOpened,
  });
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  useEffect(() => {
    if (isOpened && wrapperRef?.current) {
      const rect = wrapperRef?.current.getBoundingClientRect();

      let top = Math.round(rect.bottom + spacing);
      let left = Math.round(rect.left);

      // Adjust position if tooltip goes beyond the viewport
      if (top + tooltipHeight > window.innerHeight) {
        top = Math.round(rect.top - tooltipHeight - spacing);
      }
      if (left + tooltipWidth > window.innerWidth) {
        left = Math.round(window.innerWidth - tooltipWidth - spacing);
      }
      if (left < 0) {
        left = spacing;
      }

      setPosition({ top, left });
    }
  }, [isOpened, wrapperRef, tooltipHeight, tooltipWidth, spacing, windowWidth, windowHeight]);

  return position;
};
