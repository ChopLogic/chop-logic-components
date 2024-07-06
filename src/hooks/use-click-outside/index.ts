import React, { useEffect } from 'react';

type UseClickOutsideParams = {
  ref: React.RefObject<HTMLDivElement>;
  onClickOutsideHandler: () => void;
  dependentRef?: React.RefObject<HTMLDivElement>;
};

export const useClickOutside = ({ ref, onClickOutsideHandler, dependentRef }: UseClickOutsideParams): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isOutsideRef = ref?.current && !ref.current.contains(event.target as Node);
      const isOutsideDependentRef = !dependentRef?.current ? true : !dependentRef.current.contains(event.target as Node);
      if (isOutsideRef && isOutsideDependentRef) {
        onClickOutsideHandler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, dependentRef, onClickOutsideHandler]);
};
