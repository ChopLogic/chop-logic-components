import { useEffect, useState } from 'react';

/**
 * Custom hook that manages the mounting state based on the isOpened prop and a delay.
 *
 * @param {boolean} isOpened - Indicates if the component is opened.
 * @param {number} [delay=300] - The delay in milliseconds before unmounting.
 * @return {boolean} The current state of mounting.
 */

export const useMount = (isOpened: boolean, delay: number = 300): boolean => {
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
