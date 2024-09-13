import { ChangeEventHandler, useCallback, useContext, useState } from 'react';
import { useResetFormInput } from 'hooks/use-reset-form-input';

import { ChopLogicFormContext, ChopLogicFormData } from 'components/containers/form/FormContext';

export function getTextInputInitialValue({
  name,
  initialValues,
  defaultValue,
}: {
  name: string;
  initialValues?: ChopLogicFormData;
  defaultValue?: string | number | readonly string[];
}): string {
  if (initialValues && initialValues?.[name]) {
    return (initialValues[name] as string).toString();
  }

  if (defaultValue && typeof defaultValue === 'string') {
    return defaultValue;
  }

  return '';
}

export function useChopLogicTextInputController({
  name,
  defaultValue,
  onChange,
}: {
  name: string;
  defaultValue?: string | number | readonly string[];
  onChange?: ChangeEventHandler<HTMLInputElement>;
}) {
  const { onChangeFormInput, initialValues } = useContext(ChopLogicFormContext);
  const initialValue = getTextInputInitialValue({ initialValues, defaultValue, name });
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setValue(value);
    onChange?.(event);
    onChangeFormInput?.({ name, value });
  };

  const handleClear = () => {
    setValue('');
    onChangeFormInput?.({ name, value: '' });
  };

  const handleReset = useCallback(() => {
    setValue(initialValue);
    onChangeFormInput?.({ name, value: initialValue });
  }, [name]);

  useResetFormInput(handleReset);

  return {
    value,
    handleChange,
    handleClear,
  };
}
