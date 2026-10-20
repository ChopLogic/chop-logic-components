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

export const useBodyScrollLock = ({ isLocked }: BodyScrollLockParams): void => {
  const hasLockedRef = useRef(false);

  useEffect(() => {
    if (isLocked && !hasLockedRef.current) {
      // This instance is acquiring a lock
      if (activeLockCount === 0) {
        // First lock: save the original state
        savedScrollPosition = window.scrollY;
        savedOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
      }
      activeLockCount++;
      hasLockedRef.current = true;
    } else if (!isLocked && hasLockedRef.current) {
      // This instance is releasing its lock
      activeLockCount--;
      hasLockedRef.current = false;

      if (activeLockCount === 0) {
        // Last lock released: restore original state
        document.body.style.overflow = savedOverflow;
        window.scrollTo(0, savedScrollPosition);
      }
    }

    return () => {
      // Cleanup on unmount: release lock if this instance held one
      if (hasLockedRef.current) {
        activeLockCount--;
        hasLockedRef.current = false;

        if (activeLockCount === 0) {
          document.body.style.overflow = savedOverflow;
          window.scrollTo(0, savedScrollPosition);
        }
      }
    };
  }, [isLocked]);
};
