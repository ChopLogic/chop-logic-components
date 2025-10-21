import { FormContext } from '@contexts';
import { useResetFormInput } from '@hooks';
import type { NumericInputValidator } from '@models';
import {
  type ChangeEvent,
  type ChangeEventHandler,
  useCallback,
  useContext,
  useState,
} from 'react';

import { getNumericInputInitialValue, validateNumericInputValue } from './NumericInput.helpers';

export function useNumericInputController({
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
  validator?: NumericInputValidator;
}) {
  const { onChangeFormInput, initialValues } = useContext(FormContext);
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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
    setValid(true);
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
