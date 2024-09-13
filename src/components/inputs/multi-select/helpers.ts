import { useCallback, useContext, useState } from 'react';
import { useResetFormInput } from 'hooks/use-reset-form-input';

import { ChopLogicFormContext, ChopLogicFormData } from 'components/containers/form/FormContext';

import { SelectValue } from '../select/Select';

import { MultiSelectValue } from './MultiSelect';

export function getMultiSelectInitialValues({
  name,
  options,
  initialValues,
  defaultValue,
}: {
  name: string;
  options: SelectValue[];
  initialValues?: ChopLogicFormData;
  defaultValue?: string | number | readonly string[];
}): MultiSelectValue[] {
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

export function useChopLogicMultiSelectController({
  name,
  defaultValue,
  onChange,
  options,
}: {
  name: string;
  defaultValue?: string | number | readonly string[];
  onChange?: (values?: SelectValue[]) => void;
  options: SelectValue[];
}) {
  const [opened, setOpened] = useState(false);
  const { onChangeFormInput, initialValues } = useContext(ChopLogicFormContext);
  const initialOptions = getMultiSelectInitialValues({ name, options, initialValues, defaultValue });
  const [values, setValues] = useState<MultiSelectValue[]>(initialOptions);

  const handleClose = () => setOpened(false);

  const handleToggle = () => setOpened(!opened);

  const handleSelect = (id: string) => {
    const newValues = getMultiSelectUpdatedValues(values, id);

    setValues(newValues);
    onChange?.(newValues);
    onChangeFormInput?.({ name, value: getMultiSelectFormValues(newValues) });
  };

  const handleReset = useCallback(() => {
    setOpened(false);
    setValues(initialOptions);
    onChangeFormInput?.({ name, value: getMultiSelectFormValues(initialOptions) });
  }, [name]);

  useResetFormInput(handleReset);

  return {
    handleClose,
    handleToggle,
    handleSelect,
    opened,
    values,
  };
}

const getMultiSelectFormValues = (options: MultiSelectValue[]): string[] => {
  return options.filter((item) => item.selected).map((item) => item.id);
};

const getMultiSelectUpdatedValues = (options: MultiSelectValue[], id: string): MultiSelectValue[] => {
  const targetItem = options.find((item) => item.id === id);
  return options.map((item) => {
    return item.id === id ? { ...item, selected: !targetItem?.selected } : item;
  });
};
