import { ChopLogicInputProps, ChopLogicSelectValue } from './_common';

export interface ChopLogicMultiSelectProps extends ChopLogicInputProps {
  options: ChopLogicSelectValue[];
  onChange?: (values?: ChopLogicSelectValue[]) => void;
  defaultValue?: string | number | readonly string[];
  placeholder?: string;
}
