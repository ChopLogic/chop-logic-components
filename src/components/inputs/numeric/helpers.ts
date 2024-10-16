import { ChangeEventHandler, useCallback, useContext, useState } from 'react';
import { useResetFormInput } from 'hooks/use-reset-form-input';

import { ChopLogicFormContext } from 'components/containers/form/FormContext';
import { ChopLogicFormData } from 'components/containers/form/types';

import { NumericValidationFunction } from './NumericInput';

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

export function validateNumericInputValue({
  value,
  required,
  validator,
  maxValue,
  minValue,
}: {
  value?: number;
  required?: boolean;
  validator?: NumericValidationFunction;
  maxValue?: number;
  minValue?: number;
}): boolean {
  if (required && !validator && value === undefined) {
    return false;
  }

  if (validator && typeof validator === 'function') {
    return validator(value);
  }

  if (maxValue && minValue && value && !validator) {
    return value <= maxValue && value >= minValue;
  }

  return true;
}

export function useChopLogicNumericInputController({
  name,
  defaultValue,
  onChange,
  onSpinButtonClick,
  min,
  max,
  step,
  required,
  validator,
}: {
  name: string;
  defaultValue?: string | number | readonly string[];
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onSpinButtonClick?: (value?: number) => void;
  min?: string | number;
  max?: string | number;
  step: number;
  required: boolean;
  validator?: NumericValidationFunction;
}) {
  const { onChangeFormInput, initialValues } = useContext(ChopLogicFormContext);
  const initialValue = getNumericInputInitialValue({ initialValues, defaultValue, name });
  const maxValue = max ? Number(max) : Number.MAX_SAFE_INTEGER;
  const minValue = min ? Number(min) : Number.MIN_SAFE_INTEGER;
  const [value, setValue] = useState<number>(initialValue);
  const [valid, setValid] = useState<boolean>(true);

  const updateValue = (value: number) => {
    setValue(value);
    const valid = validateNumericInputValue({ value, required, validator, maxValue, minValue });
    setValid(valid);
    onChangeFormInput?.({ name, value, valid });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    updateValue(value);
    onChange?.(event);
  };

  const increment = () => {
    updateValue(value + step);
    onSpinButtonClick?.(value + step);
  };

  const decrement = () => {
    updateValue(value - step);
    onSpinButtonClick?.(value - step);
  };

  const handleReset = useCallback(() => {
    setValue(initialValue);
    onChangeFormInput?.({ name, value: initialValue, valid: true });
  }, [name]);

  useResetFormInput(handleReset);

  return {
    handleChange,
    value,
    valid,
    minValue,
    maxValue,
    increment,
    decrement,
  };
}
