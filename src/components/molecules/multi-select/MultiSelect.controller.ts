import { FormContext } from '@contexts';
import { useResetFormInput } from '@hooks';
import type { MultiSelectValue, SelectValue } from '@types';
import { useCallback, useContext, useRef, useState } from 'react';

import {
  getMultiSelectFormValues,
  getMultiSelectInitialValues,
  getMultiSelectUpdatedValues,
} from './MultiSelect.helpers';

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
  const initialOptions = getMultiSelectInitialValues({
    name,
    options,
    initialValues,
    defaultValue,
  });
  const [values, setValues] = useState<MultiSelectValue[]>(initialOptions);
  const onChangeFormInputRef = useRef(onChangeFormInput);
  const initialOptionsRef = useRef(initialOptions);

  // Update refs when values change
  onChangeFormInputRef.current = onChangeFormInput;
  initialOptionsRef.current = initialOptions;

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
    setValues(initialOptionsRef.current);
    onChangeFormInputRef.current?.({
      name,
      value: getMultiSelectFormValues(initialOptionsRef.current),
    });
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
