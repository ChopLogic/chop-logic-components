import type { ChopLogicRegExpWithFlags, FormValues, TextInputValidator } from '@models';

export function validateTextInputValue({
  value,
  required,
  validator,
}: {
  value: string;
  required: boolean;
  validator?: ChopLogicRegExpWithFlags | TextInputValidator;
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
  initialValues?: FormValues;
  defaultValue?: string | number | readonly string[];
}): string {
  if (initialValues?.[name]) {
    return (initialValues[name] as string).toString();
  }

  if (defaultValue && typeof defaultValue === 'string') {
    return defaultValue;
  }

  return '';
}
