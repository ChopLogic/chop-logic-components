import type { ChopLogicInputProps, SelectValue } from './_common';

export interface MultiSelectProps extends ChopLogicInputProps {
  options: SelectValue[];
  onChange?: (values?: SelectValue[]) => void;
  defaultValue?: string | number | readonly string[];
  placeholder?: string;
}
