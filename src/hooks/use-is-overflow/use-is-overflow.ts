import { RefObject, useEffect, useState } from 'react';

export const useIsOverflow = ({
  ref,
  dimension,
  isMounted,
}: {
  ref: RefObject<HTMLElement | null>;
  dimension: 'width' | 'height';
  isMounted?: boolean;
}) => {
  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    const checkIsOverflow = () => {
      const { current } = ref;

      if (current) {
        if (dimension === 'width') {
          const { scrollWidth = 0, clientWidth = 0 } = current as HTMLElement;
          setIsOverflow(scrollWidth > clientWidth);
        }

        if (dimension === 'height') {
          const { scrollHeight = 0, clientHeight = 0 } = current as HTMLElement;
          setIsOverflow(scrollHeight > clientHeight);
        }
      }
    };

    if (isMounted) {
      checkIsOverflow();
    }

    window.addEventListener('resize', checkIsOverflow);

    return () => window.removeEventListener('resize', checkIsOverflow);
  }, [ref, dimension, isMounted]);

  return isOverflow;
};
