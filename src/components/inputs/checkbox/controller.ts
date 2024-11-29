import React, { useCallback, useContext, useState } from 'react';

import { ChopLogicFormContext } from '@/contexts';
import { useResetFormInput } from '@/hooks';

import { getCheckboxInitialValue } from './helpers';

export function useChopLogicCheckboxController({
  name,
  defaultChecked,
  onChange,
}: {
  name: string;
  defaultChecked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) {
  const { onChangeFormInput, initialValues } = useContext(ChopLogicFormContext);
  const initialValue = getCheckboxInitialValue({ initialValues, name, defaultChecked });
  const [isChecked, setIsChecked] = useState<boolean>(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    onChange?.(e);
    onChangeFormInput?.({ name, value: checked });
  };

  const handleReset = useCallback(() => {
    setIsChecked(initialValue);
    onChangeFormInput?.({ name, value: initialValue });
  }, [name]);

  useResetFormInput(handleReset);

  return {
    handleChange,
    checked: isChecked,
  };
}
