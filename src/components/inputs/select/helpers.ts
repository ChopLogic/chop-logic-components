import { ChopLogicFormData, ChopLogicSelectValue } from '@/models';

export function getSelectInitialValue({
  name,
  options,
  initialValues,
  defaultValue,
}: {
  name: string;
  options: ChopLogicSelectValue[];
  initialValues?: ChopLogicFormData;
  defaultValue?: string | number | readonly string[];
}): ChopLogicSelectValue | undefined {
  let valueId: string;

  if (initialValues && initialValues[name]) {
    valueId = ((initialValues[name] as ChopLogicSelectValue)?.id as string) ?? (initialValues[name] as string);
  }

  if (!initialValues?.[name] && defaultValue && typeof defaultValue === 'string') {
    valueId = defaultValue;
  }

  return options.find((item) => item.id === valueId);
}
