import { useCallback, useContext, useState } from 'react';

import { ChopLogicFormContext } from '@/contexts';
import { useResetFormInput } from '@/hooks';
import { ChopLogicSelectValue } from '@/models';

import { getSelectInitialValue } from './helpers';

export function useChopLogicSelectController({
  name,
  defaultValue,
  onChange,
  options,
}: {
  name: string;
  defaultValue?: string | number | readonly string[];
  onChange?: (value?: ChopLogicSelectValue) => void;
  options: ChopLogicSelectValue[];
}) {
  const { onChangeFormInput, initialValues } = useContext(ChopLogicFormContext);
  const initialValue = getSelectInitialValue({ name, options, defaultValue, initialValues });
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState<ChopLogicSelectValue | undefined>(initialValue);

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
