import { type RefObject, useEffect } from 'react';

type UseClickOutsideParams = {
  ref: RefObject<HTMLElement | null>;
  onClickOutsideHandler: () => void;
  dependentRef?: RefObject<HTMLElement | null>;
};

export const useClickOutside = ({
  ref,
  onClickOutsideHandler,
  dependentRef,
}: UseClickOutsideParams): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isOutsideRef = ref?.current && !ref.current.contains(event.target as Node);
      const hasNoDependentRef = !dependentRef?.current;
      const isOutsideDependentRef = hasNoDependentRef
        ? true
        : !dependentRef?.current?.contains(event.target as Node);
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
