import { FormContext } from '@contexts';
import { useResetFormInput } from '@hooks';
import type { ChopLogicRegExpWithFlags, TextInputValidator } from '@models';
import {
  type ChangeEvent,
  type ChangeEventHandler,
  useCallback,
  useContext,
  useState,
} from 'react';

import { getTextInputInitialValue, validateTextInputValue } from './TextInput.helpers';

export function useTextInputController({
  name,
  defaultValue,
  onChange,
  onClear,
  required,
  validator,
}: {
  name: string;
  required: boolean;
  validator?: ChopLogicRegExpWithFlags | TextInputValidator;
  defaultValue?: string | number | readonly string[];
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClear?: () => void;
}) {
  const { onChangeFormInput, initialValues } = useContext(FormContext);
  const initialValue = getTextInputInitialValue({ initialValues, defaultValue, name });
  const [value, setValue] = useState<string>(initialValue);
  const [valid, setValid] = useState<boolean>(true);
  const [passwordShown, setPasswordShown] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const valid = validateTextInputValue({ value, required, validator });

    setValue(value);
    setValid(valid);
    onChangeFormInput?.({ name, value, valid });
    onChange?.(event);
  };

  const handleClear = () => {
    setValue('');
    setValid(true);
    onChangeFormInput?.({ name, value: '', valid: true });
    onClear?.();
  };

  const handleReset = useCallback(() => {
    setValue(initialValue);
    setValid(true);
    onChangeFormInput?.({ name, value: initialValue, valid: true });
  }, [name]);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  useResetFormInput(handleReset);

  return {
    value,
    valid,
    passwordShown,
    handleChange,
    handleClear,
    togglePassword,
  };
}
