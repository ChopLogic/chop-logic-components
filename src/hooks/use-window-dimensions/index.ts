import { useEffect, useState } from 'react';

export type Dimensions = { width: number; height: number };

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
