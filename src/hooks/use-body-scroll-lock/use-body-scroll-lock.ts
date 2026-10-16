import { useEffect, useRef } from 'react';

type BodyScrollLockParams = {
  isLocked: boolean;
};

export const useBodyScrollLock = ({ isLocked }: BodyScrollLockParams): void => {
  const scrollPositionRef = useRef(0);
  const originalOverflowRef = useRef('');

  useEffect(() => {
    if (isLocked) {
      scrollPositionRef.current = window.scrollY;
      originalOverflowRef.current = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalOverflowRef.current;
      window.scrollTo(0, scrollPositionRef.current);
    }

    return () => {
      document.body.style.overflow = originalOverflowRef.current;
      window.scrollTo(0, scrollPositionRef.current);
    };
  }, [isLocked]);
};
