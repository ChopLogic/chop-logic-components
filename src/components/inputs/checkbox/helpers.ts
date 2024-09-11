import { useCallback, useContext, useState } from 'react';
import { useResetFormInput } from 'hooks/use-reset-form-input';

import { ChopLogicFormContext, ChopLogicFormData } from 'components/containers/form/elements/FormContext';

function getCheckboxInitialValue({
  defaultChecked,
  initialValues,
  name,
}: {
  defaultChecked?: boolean;
  initialValues?: ChopLogicFormData;
  name: string;
}): boolean {
  if (initialValues && initialValues?.[name] !== undefined) {
    return !!initialValues?.[name];
  }

  return !!defaultChecked;
}

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
