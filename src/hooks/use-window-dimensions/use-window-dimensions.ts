import { Dimensions } from '@models';
import { useEffect, useState } from 'react';

function getWindowDimensions(): Dimensions {
  const { innerWidth: width, innerHeight: height } = window;

  return { width, height };
}

export function useWindowDimensions(): Dimensions {
  const [windowDimensions, setWindowDimensions] = useState<Dimensions>(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
