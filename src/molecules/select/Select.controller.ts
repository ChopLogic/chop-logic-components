import { FormContext } from '@contexts';
import { useResetFormInput } from '@hooks';
import type { SelectValue } from '@models';
import { useCallback, useContext, useState } from 'react';

import { getSelectInitialValue } from './Select.helpers';

export function useSelectController({
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
  const { onChangeFormInput, initialValues } = useContext(FormContext);
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
