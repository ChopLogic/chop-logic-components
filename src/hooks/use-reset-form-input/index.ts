import { useContext, useEffect } from 'react';

import { ChopLogicFormContext } from 'components/containers/form/elements/FormContext';

export const useResetFormInput = (onReset: () => void) => {
  const { resetSignal } = useContext(ChopLogicFormContext);

  useEffect(() => {
    if (resetSignal) {
      onReset();
    }
  }, [resetSignal, onReset]);
};
