import { ChopLogicFormData } from 'components/containers/form/types';

import { NumericValidationFunction } from './types';

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
