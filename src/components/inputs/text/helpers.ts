import { ChopLogicFormData } from 'components/containers/form/elements/FormContext';

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
