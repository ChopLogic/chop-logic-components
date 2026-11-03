import { useEffect, useRef } from 'react';

type BodyScrollLockParams = {
  isLocked: boolean;
};

// CSS class applied to html element when scroll is locked
export const SCROLL_LOCK_CLASS = 'cl-scroll-locked';

// Module-level state to coordinate scroll locks across stacked dialogs
let activeLockCount = 0;
let savedScrollPosition = 0;

// Export for testing purposes only
export const _resetScrollLockState = (): void => {
  activeLockCount = 0;
  savedScrollPosition = 0;
};

export const acquireLock = (): void => {
  if (activeLockCount === 0) {
    savedScrollPosition = window.scrollY;
    document.documentElement.classList.add(SCROLL_LOCK_CLASS);
  }
  activeLockCount++;
};

export const releaseLock = (): void => {
  activeLockCount--;
  if (activeLockCount === 0) {
    document.documentElement.classList.remove(SCROLL_LOCK_CLASS);
    window.scrollTo(0, savedScrollPosition);
  }
};

export const useBodyScrollLock = ({ isLocked }: BodyScrollLockParams): void => {
  const hasLockedRef = useRef(false);

  useEffect(() => {
    if (isLocked && !hasLockedRef.current) {
      acquireLock();
      hasLockedRef.current = true;
    }

    return () => {
      if (hasLockedRef.current) {
        releaseLock();
        hasLockedRef.current = false;
      }
    };
  }, [isLocked]);
};
