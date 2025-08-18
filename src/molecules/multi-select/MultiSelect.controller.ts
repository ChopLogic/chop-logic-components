import { FormContext } from '@contexts';
import { useResetFormInput } from '@hooks';
import { MultiSelectValue, SelectValue } from '@models';
import { useCallback, useContext, useState } from 'react';

import { getMultiSelectFormValues, getMultiSelectInitialValues, getMultiSelectUpdatedValues } from './MultiSelect.helpers.ts';

export function useMultiSelectController({
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
  const { onChangeFormInput, initialValues } = useContext(FormContext);
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
