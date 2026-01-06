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
      const selectedId = initialValues[name].find(
        (item) => item === option.id || item?.id === option.id,
      );
      if (selectedId) selected = true;
    }

    if (!initialValues?.[name] && Array.isArray(defaultValue)) {
      const selectedId = defaultValue.find((item) => item === option.id);
      if (selectedId) selected = true;
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
  const targetItem = options.find((item) => item.id === id);
  return options.map((item) => {
    return item.id === id ? { ...item, selected: !targetItem?.selected } : item;
  });
};
