import { ChopLogicInputProps } from './_common';

export interface SwitchProps extends ChopLogicInputProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  value?: string;
}
