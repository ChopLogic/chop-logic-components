import { FormValues } from '@models';

export function getCheckboxInitialValue({
  defaultChecked,
  initialValues,
  name,
}: {
  defaultChecked?: boolean;
  initialValues?: FormValues;
  name: string;
}): boolean {
  if (initialValues && initialValues?.[name] !== undefined) {
    return !!initialValues?.[name];
  }

  return Boolean(defaultChecked);
}
