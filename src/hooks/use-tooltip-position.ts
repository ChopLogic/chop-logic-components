import { useState, useEffect } from 'react';

export const useTooltipPosition = (ref: React.RefObject<HTMLSpanElement>, isOpened: boolean) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (isOpened && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const tooltipHeight = 40; // Adjust based on tooltip height
      const tooltipWidth = 100; // Adjust based on tooltip width
      const spacing = 8; // Space between the element and the tooltip

      let top = rect.bottom + spacing;
      let left = rect.left;

      // Adjust position if tooltip goes beyond the viewport
      if (top + tooltipHeight > window.innerHeight) {
        top = rect.top - tooltipHeight - spacing;
      }
      if (left + tooltipWidth > window.innerWidth) {
        left = window.innerWidth - tooltipWidth - spacing;
      }
      if (left < 0) {
        left = spacing;
      }

      setPosition({ top, left });
    }
  }, [isOpened, ref]);

  return position;
};
