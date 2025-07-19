import { ChopLogicFormContext } from '@contexts';
import { useContext, useEffect } from 'react';

export const useResetFormInput = (onReset: () => void) => {
  const { resetSignal } = useContext(ChopLogicFormContext);

  useEffect(() => {
    if (resetSignal) {
      onReset();
    }
  }, [resetSignal, onReset]);
};
