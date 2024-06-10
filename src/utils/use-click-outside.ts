/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';

/**
 * Hook that handles clicks outside of the passed ref
 */

type UseClickOutsideParams = {
  ref: React.MutableRefObject<any>;
  onClickOutsideHandler: () => void;
  dependentRef?: React.MutableRefObject<any>;
};

export const useClickOutside = ({ ref, onClickOutsideHandler, dependentRef }: UseClickOutsideParams) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      const isOutsideRef = ref?.current && !ref.current.contains(event.target);
      const isOutsideDependentRef = !dependentRef?.current ? true : !dependentRef.current.contains(event.target);
      if (isOutsideRef && isOutsideDependentRef) {
        onClickOutsideHandler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, dependentRef]);
};
