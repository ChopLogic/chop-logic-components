import { FormContext } from '@contexts';
import { useResetFormInput } from '@hooks';
import {
  type ChangeEvent,
  type ChangeEventHandler,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';

import { getCheckboxInitialValue } from './Checkbox.helpers';

export function useCheckboxController({
  name,
  defaultChecked,
  onChange,
}: {
  name: string;
  defaultChecked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}) {
  const { onChangeFormInput, initialValues } = useContext(FormContext);
  const initialValue = getCheckboxInitialValue({ initialValues, name, defaultChecked });
  const [isChecked, setIsChecked] = useState<boolean>(initialValue);
  const onChangeFormInputRef = useRef(onChangeFormInput);
  const initialValueRef = useRef(initialValue);

  // Update refs when values change
  onChangeFormInputRef.current = onChangeFormInput;
  initialValueRef.current = initialValue;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    onChange?.(e);
    onChangeFormInput?.({ name, value: checked });
  };

  const handleReset = useCallback(() => {
    setIsChecked(initialValueRef.current);
    onChangeFormInputRef.current?.({ name, value: initialValueRef.current });
  }, [name]);

  useResetFormInput(handleReset);

  return {
    handleChange,
    checked: isChecked,
  };
}
