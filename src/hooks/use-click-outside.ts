import React, { useEffect } from 'react';

type UseClickOutsideParams = {
  ref: React.RefObject<HTMLDivElement>;
  onClickOutsideHandler: () => void;
  dependentRef?: React.RefObject<HTMLDivElement>;
};

/**
 * Custom hook that triggers a callback when a click event occurs outside specified elements.
 *
 * @param {UseClickOutsideParams} ref - Reference to the main element to check if the click is outside
 * @param {UseClickOutsideParams} onClickOutsideHandler - Callback function to execute when a click event occurs outside
 * @param {UseClickOutsideParams} dependentRef - Reference to a dependent element to check if the click is outside
 * @return {void} Function does not return anything
 */

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
