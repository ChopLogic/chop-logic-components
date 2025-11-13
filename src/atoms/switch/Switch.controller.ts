import { FormContext } from '@contexts';
import { useResetFormInput } from '@hooks';
import { type KeyboardEvent, useCallback, useContext, useRef, useState } from 'react';

import { getSwitchInitialValue } from './Switch.helpers';

export function useSwitchController({
  name,
  defaultChecked,
  onChange,
}: {
  name: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}) {
  const { onChangeFormInput, initialValues } = useContext(FormContext);
  const initialValue = getSwitchInitialValue({ initialValues, name, defaultChecked });
  const [isChecked, setIsChecked] = useState<boolean>(initialValue);
  const onChangeFormInputRef = useRef(onChangeFormInput);
  const initialValueRef = useRef(initialValue);
  const onChangeRef = useRef(onChange);

  // Update refs when values change
  onChangeFormInputRef.current = onChangeFormInput;
  initialValueRef.current = initialValue;
  onChangeRef.current = onChange;

  const handleChange = useCallback(
    (checked: boolean) => {
      setIsChecked(checked);
      onChangeRef.current?.(checked);
      onChangeFormInputRef.current?.({ name, value: checked });
    },
    [name],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        handleChange(!isChecked);
      }
    },
    [isChecked, handleChange],
  );

  const handleReset = useCallback(() => {
    setIsChecked(initialValueRef.current);
    onChangeFormInputRef.current?.({ name, value: initialValueRef.current });
  }, [name]);

  useResetFormInput(handleReset);

  return {
    checked: isChecked,
    handleChange,
    handleKeyDown,
  };
}
