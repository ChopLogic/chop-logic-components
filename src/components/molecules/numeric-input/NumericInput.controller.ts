import { useResetFormInput } from '@hooks';
import type { NumericInputValidator } from '@types';
import {
  type ChangeEvent,
  type ChangeEventHandler,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';
import { FormContext } from '../../contexts';

import { getNumericInputInitialValue, validateNumericInputValue } from './NumericInput.helpers';

export function useNumericInputController({
  name,
  defaultValue,
  onChange,
  onDecrement,
  onIncrement,
  min,
  max,
  step,
  required,
  validator,
}: {
  name: string;
  defaultValue?: string | number | readonly string[];
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onIncrement?: () => void;
  onDecrement?: () => void;
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
  const onChangeFormInputRef = useRef(onChangeFormInput);
  const initialValueRef = useRef(initialValue);

  // Update refs when values change
  onChangeFormInputRef.current = onChangeFormInput;
  initialValueRef.current = initialValue;

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

  const handleIncrement = () => {
    updateValue(value + step);
    onIncrement?.();
  };

  const handleDecrement = () => {
    updateValue(value - step);
    onDecrement?.();
  };

  const handleReset = useCallback(() => {
    setValue(initialValueRef.current);
    setValid(true);
    onChangeFormInputRef.current?.({ name, value: initialValueRef.current, valid: true });
  }, [name]);

  useResetFormInput(handleReset);

  return {
    handleChange,
    value,
    valid,
    minValue,
    maxValue,
    handleIncrement,
    handleDecrement,
  };
}
