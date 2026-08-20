import type { FormValues, MultiSelectValue, SelectValue } from '@types';

export function getMultiSelectInitialValues({
  name,
  options,
  initialValues,
  defaultValue,
}: {
  name: string;
  options: SelectValue[];
  initialValues?: FormValues;
  defaultValue?: string | number | readonly string[];
}): MultiSelectValue[] {
  return options.map((option) => {
    let selected = false;

    if (initialValues?.[name] && Array.isArray(initialValues[name])) {
      selected = initialValues[name].some((item) => item === option.id || item?.id === option.id);
    }

    if (!initialValues?.[name] && Array.isArray(defaultValue)) {
      selected = defaultValue.some((item) => item === option.id);
    }

    return { ...option, selected };
  });
}

export const getMultiSelectFormValues = (options: MultiSelectValue[]): string[] => {
  return options.filter((item) => item.selected).map((item) => item.id);
};

export const getMultiSelectUpdatedValues = (
  options: MultiSelectValue[],
  id: string,
): MultiSelectValue[] => {
  const targetSelected = options.some((item) => item.id === id && item.selected);
  return options.map((item) => {
    return item.id === id ? { ...item, selected: !targetSelected } : item;
  });
};
