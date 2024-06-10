import { useEffect, useState } from 'react';

export const useMount = (isOpened: boolean, delay = 200): boolean => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpened && !isMounted) {
      setIsMounted(true);
    } else if (!isOpened && isMounted) {
      setTimeout(() => {
        setIsMounted(false);
      }, delay);
    }
  }, [isOpened]);

  return isMounted;
};
