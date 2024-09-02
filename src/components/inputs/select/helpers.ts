import { ChopLogicFormData } from 'components/containers/form/FormContext';

import { SelectValue } from './Select';

export function getSelectInitialValue({
  name,
  options,
  initialValues,
  defaultValue,
}: {
  name: string;
  options: SelectValue[];
  initialValues?: ChopLogicFormData;
  defaultValue?: string | number | readonly string[];
}): SelectValue | undefined {
  let valueId: string;

  if (initialValues && initialValues[name]) {
    valueId = ((initialValues[name] as SelectValue)?.id as string) ?? (initialValues[name] as string);
  }

  if (!initialValues?.[name] && defaultValue && typeof defaultValue === 'string') {
    valueId = defaultValue;
  }

  return options.find((item) => item.id === valueId);
}
