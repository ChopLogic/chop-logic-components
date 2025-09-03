import { useEffect, useState } from 'react';

export const useValueState = (value: string, onChange?: (value: string) => void) => {
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const updateValue = (newValue: string) => {
    setInternalValue(newValue);
  };

  const commitValue = () => {
    if (internalValue !== value) {
      onChange?.(internalValue);
    }
  };

  const resetValue = () => {
    setInternalValue(value);
  };

  return {
    internalValue,
    updateValue,
    commitValue,
    resetValue,
  };
};
