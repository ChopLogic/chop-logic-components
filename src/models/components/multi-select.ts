import { ChopLogicInputProps, ChopLogicSelectValue } from '../common';

export interface ChopLogicMultiSelectProps extends ChopLogicInputProps {
  options: ChopLogicSelectValue[];
  onChange?: (values?: ChopLogicSelectValue[]) => void;
  defaultValue?: string | number | readonly string[];
  placeholder?: string;
}
