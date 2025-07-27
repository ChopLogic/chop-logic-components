import { ChopLogicFormContext } from '@contexts';
import { useResetFormInput } from '@hooks';
import { ChopLogicMultiSelectValue, ChopLogicSelectValue } from '@models';
import { useCallback, useContext, useState } from 'react';

import { getMultiSelectFormValues, getMultiSelectInitialValues, getMultiSelectUpdatedValues } from './Multiselect.helpers.ts';

export function useChopLogicMultiSelectController({
  name,
  defaultValue,
  onChange,
  options,
}: {
  name: string;
  defaultValue?: string | number | readonly string[];
  onChange?: (values?: ChopLogicSelectValue[]) => void;
  options: ChopLogicSelectValue[];
}) {
  const [opened, setOpened] = useState(false);
  const { onChangeFormInput, initialValues } = useContext(ChopLogicFormContext);
  const initialOptions = getMultiSelectInitialValues({ name, options, initialValues, defaultValue });
  const [values, setValues] = useState<ChopLogicMultiSelectValue[]>(initialOptions);

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
