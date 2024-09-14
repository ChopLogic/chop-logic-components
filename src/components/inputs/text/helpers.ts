import { ChangeEventHandler, useCallback, useContext, useState } from 'react';
import { useResetFormInput } from 'hooks/use-reset-form-input';

import { ChopLogicFormContext, ChopLogicFormData } from 'components/containers/form/FormContext';

import { RegExpWithFlags, ValidationFunction } from './TextInput';

export function validateTextInputValue({
  value,
  required,
  validator,
}: {
  value: string;
  required: boolean;
  validator?: RegExpWithFlags | ValidationFunction;
}): boolean {
  if (required && !validator && !value.length) {
    return false;
  }

  if (validator && typeof validator === 'function') {
    return validator(value);
  }

  if (validator && typeof validator === 'object') {
    return new RegExp(validator.regexp, validator?.flags).test(value);
  }

  return true;
}

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
  required,
  validator,
}: {
  name: string;
  required: boolean;
  validator?: RegExpWithFlags | ValidationFunction;
  defaultValue?: string | number | readonly string[];
  onChange?: ChangeEventHandler<HTMLInputElement>;
}) {
  const { onChangeFormInput, initialValues } = useContext(ChopLogicFormContext);
  const initialValue = getTextInputInitialValue({ initialValues, defaultValue, name });
  const [value, setValue] = useState<string>(initialValue);
  const [valid, setValid] = useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setValue(value);
    setValid(validateTextInputValue({ value, required, validator }));
    onChange?.(event);
    onChangeFormInput?.({ name, value });
  };

  const handleClear = () => {
    setValue('');
    setValid(true);
    onChangeFormInput?.({ name, value: '' });
  };

  const handleReset = useCallback(() => {
    setValue(initialValue);
    setValid(true);
    onChangeFormInput?.({ name, value: initialValue });
  }, [name]);

  useResetFormInput(handleReset);

  return {
    value,
    valid,
    handleChange,
    handleClear,
  };
}
