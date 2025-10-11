import { FormValues, SelectValue } from '@models';

export function getSelectInitialValue({
  name,
  options,
  initialValues,
  defaultValue,
}: {
  name: string;
  options: SelectValue[];
  initialValues?: FormValues;
  defaultValue?: string | number | readonly string[];
}): SelectValue | undefined {
  let valueId: string;

  if (initialValues && Object.hasOwn(initialValues, name)) {
    const value = initialValues[name];
    valueId = ((value as FormValues)?.id as string) ?? (value as string);
  }

  if (!initialValues?.[name] && defaultValue && typeof defaultValue === 'string') {
    valueId = defaultValue;
  }

  return options.find((item) => item.id === valueId);
}
