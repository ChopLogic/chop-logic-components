import type { FormValues } from '@models';

export function getSwitchInitialValue({
  defaultChecked,
  initialValues,
  name,
}: {
  defaultChecked?: boolean;
  initialValues?: FormValues;
  name: string;
}): boolean {
  if (initialValues?.[name] !== undefined) {
    return !!initialValues?.[name];
  }

  return Boolean(defaultChecked);
}
