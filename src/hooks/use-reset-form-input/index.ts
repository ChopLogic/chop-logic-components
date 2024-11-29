import { useContext, useEffect } from 'react';

import { ChopLogicFormContext } from '@/contexts';

export const useResetFormInput = (onReset: () => void) => {
  const { resetSignal } = useContext(ChopLogicFormContext);

  useEffect(() => {
    if (resetSignal) {
      onReset();
    }
  }, [resetSignal, onReset]);
};
