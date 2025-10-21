import { useEffect, useState } from 'react';

export const useIsMounted = (isOpened: boolean, delay: number = 300): boolean => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isOpened) {
      setIsMounted(true);
    } else {
      timeoutId = setTimeout(() => {
        setIsMounted(false);
      }, delay);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isOpened, delay]);

  return isMounted;
};
