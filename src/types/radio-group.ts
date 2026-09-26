import type { ChopLogicInputProps } from './_common';

export interface RadioGroupOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupProps extends ChopLogicInputProps {
  options: RadioGroupOption[];
  orientation?: 'vertical' | 'horizontal';
  onChange?: (value: string) => void;
  defaultValue?: string;
}
