import { FormContext } from '@components/contexts';
import { useContext, useEffect } from 'react';

export const useResetFormInput = (onReset: () => void) => {
  const { resetSignal } = useContext(FormContext);

  useEffect(() => {
    if (resetSignal) {
      onReset();
    }
  }, [resetSignal, onReset]);
};
