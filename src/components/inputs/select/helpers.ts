import { useCallback, useContext, useState } from 'react';
import { useResetFormInput } from 'hooks/use-reset-form-input';

import { ChopLogicFormContext } from 'components/containers/form/FormContext';
import { ChopLogicFormData } from 'components/containers/form/types';

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

export function useChopLogicSelectController({
  name,
  defaultValue,
  onChange,
  options,
}: {
  name: string;
  defaultValue?: string | number | readonly string[];
  onChange?: (value?: SelectValue) => void;
  options: SelectValue[];
}) {
  const { onChangeFormInput, initialValues } = useContext(ChopLogicFormContext);
  const initialValue = getSelectInitialValue({ name, options, defaultValue, initialValues });
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState<SelectValue | undefined>(initialValue);

  const handleClose = () => setOpened(false);

  const handleToggle = () => setOpened(!opened);

  const handleSelect = (id: string) => {
    const newValue = options.find((item) => item.id === id);
    setSelected(newValue);
    onChange?.(newValue);
    onChangeFormInput?.({ name, value: newValue?.id });
  };

  const handleClear = () => {
    setSelected(undefined);
    onChange?.(undefined);
  };

  const handleReset = useCallback(() => {
    setOpened(false);
    setSelected(initialValue);
    onChangeFormInput?.({ name, value: initialValue?.id });
  }, [name]);

  useResetFormInput(handleReset);

  return {
    selected,
    opened,
    handleClear,
    handleClose,
    handleToggle,
    handleSelect,
  };
}
