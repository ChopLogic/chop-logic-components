import { useEffect, useState } from 'react';

type useContainerDimensionsParams = {
  ref: React.RefObject<HTMLDivElement | HTMLSpanElement>;
  isVisible?: boolean;
};

export const useContainerDimensions = ({ ref, isVisible }: useContainerDimensionsParams): { width: number; height: number } => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current && isVisible) {
      console.log('HERE', ref.current);
      setDimensions({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      });
    }
  }, [ref, isVisible]);

  return dimensions;
};
