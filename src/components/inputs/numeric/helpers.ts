import { ChopLogicFormData } from 'components/containers/form/FormContext';

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
