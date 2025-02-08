import { ChopLogicInputProps, ChopLogicSelectValue } from '../common.ts';
export interface ChopLogicMultiSelectProps extends ChopLogicInputProps {
    options: ChopLogicSelectValue[];
    onChange?: (values?: ChopLogicSelectValue[]) => void;
    defaultValue?: string | number | readonly string[];
    placeholder?: string;
}
