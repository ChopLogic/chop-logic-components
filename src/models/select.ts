import type { ChopLogicInputProps, SelectValue } from './_common';

export interface SelectProps extends ChopLogicInputProps {
  options: SelectValue[];
  onChange?: (value?: SelectValue) => void;
  placeholder?: string;
  defaultValue?: string | number | readonly string[];
}
