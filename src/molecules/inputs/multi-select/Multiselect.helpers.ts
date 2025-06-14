import { ChopLogicFormData, ChopLogicMultiSelectValue, ChopLogicSelectValue } from '@models';

export function getMultiSelectInitialValues({
  name,
  options,
  initialValues,
  defaultValue,
}: {
  name: string;
  options: ChopLogicSelectValue[];
  initialValues?: ChopLogicFormData;
  defaultValue?: string | number | readonly string[];
}): ChopLogicMultiSelectValue[] {
  return options.map((option) => {
    let selected = false;

    if (initialValues && initialValues?.[name] && Array.isArray(initialValues[name])) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const selectedId = (initialValues[name] as Array<any>).find((item) => item === option.id || item?.id === option.id);
      if (selectedId) selected = true;
    }

    if (!initialValues?.[name] && Array.isArray(defaultValue)) {
      const selectedId = defaultValue.find((item) => item === option.id);
      if (selectedId) selected = true;
    }

    return { ...option, selected };
  });
}

export const getMultiSelectFormValues = (options: ChopLogicMultiSelectValue[]): string[] => {
  return options.filter((item) => item.selected).map((item) => item.id);
};

export const getMultiSelectUpdatedValues = (options: ChopLogicMultiSelectValue[], id: string): ChopLogicMultiSelectValue[] => {
  const targetItem = options.find((item) => item.id === id);
  return options.map((item) => {
    return item.id === id ? { ...item, selected: !targetItem?.selected } : item;
  });
};
