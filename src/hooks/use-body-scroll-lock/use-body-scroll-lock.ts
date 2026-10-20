import { useEffect, useRef } from 'react';

type BodyScrollLockParams = {
  isLocked: boolean;
};

// Module-level state to coordinate scroll locks across stacked dialogs
let activeLockCount = 0;
let savedScrollPosition = 0;
let savedOverflow = '';

// Export for testing purposes only
export const _resetScrollLockState = (): void => {
  activeLockCount = 0;
  savedScrollPosition = 0;
  savedOverflow = '';
};

export const acquireLock = (): void => {
  if (activeLockCount === 0) {
    savedScrollPosition = window.scrollY;
    savedOverflow = document.body.style.overflow;
    document.body.style.overflow = 'clip';
  }
  activeLockCount++;
};

export const releaseLock = (): void => {
  activeLockCount--;
  if (activeLockCount === 0) {
    document.body.style.overflow = savedOverflow;
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
