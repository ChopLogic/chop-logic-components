import { ChangeEventHandler, useCallback, useContext, useState } from 'react';
import { useResetFormInput } from 'hooks/use-reset-form-input';

import { ChopLogicFormContext, ChopLogicFormData } from 'components/containers/form/FormContext';

export function getNumericInputInitialValue({
  name,
  initialValues,
  defaultValue,
}: {
  name: string;
  initialValues?: ChopLogicFormData;
  defaultValue?: string | number | readonly string[];
}): number {
  if (initialValues && initialValues[name]) {
    return Number(initialValues[name]);
  }

  if (defaultValue && typeof defaultValue === 'number') {
    return defaultValue;
  }

  return 0;
}

export function useChopLogicNumericInputController({
  name,
  defaultValue,
  onChange,
  min,
  max,
}: {
  name: string;
  defaultValue?: string | number | readonly string[];
  onChange?: ChangeEventHandler<HTMLInputElement>;
  min?: string | number;
  max?: string | number;
}) {
  const { onChangeFormInput, initialValues } = useContext(ChopLogicFormContext);
  const initialValue = getNumericInputInitialValue({ initialValues, defaultValue, name });
  const maxValue = max ? Number(max) : Number.MAX_SAFE_INTEGER;
  const minValue = min ? Number(min) : Number.MIN_SAFE_INTEGER;
  const [value, setValue] = useState<number | string>(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = Number(event.target.value);
    if (newValue > maxValue) newValue = maxValue;
    if (newValue < minValue) newValue = minValue;

    setValue(newValue);
    onChange?.(event);
    onChangeFormInput?.({ name, value: newValue });
  };

  const handleReset = useCallback(() => {
    setValue(initialValue);
    onChangeFormInput?.({ name, value: initialValue });
  }, [name]);

  useResetFormInput(handleReset);

  return {
    handleChange,
    value,
    minValue,
    maxValue,
  };
}
