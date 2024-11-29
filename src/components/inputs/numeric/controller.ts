import React, { ChangeEventHandler, useCallback, useContext, useState } from 'react';

import { ChopLogicFormContext } from '@/contexts';
import { useResetFormInput } from '@/hooks';
import { NumericValidationFunction } from '@/types';

import { getNumericInputInitialValue, validateNumericInputValue } from './helpers';

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
