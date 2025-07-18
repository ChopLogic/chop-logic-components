import { RefObject, useEffect, useState } from 'react';

export const useIsOverflow = (ref: RefObject<HTMLElement | null>, dimension: 'width' | 'height') => {
  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    const { current } = ref;

    const trigger = () => {
      if (dimension === 'width') {
        const { scrollWidth = 0, clientWidth = 0 } = current as HTMLElement;
        setIsOverflow(scrollWidth > clientWidth);
      }

      if (dimension === 'height') {
        const { scrollHeight = 0, clientHeight = 0 } = current as HTMLElement;
        setIsOverflow(scrollHeight > clientHeight);
      }
    };

    if (current) {
      trigger();
    }
  }, [ref, dimension]);

  return isOverflow;
};
