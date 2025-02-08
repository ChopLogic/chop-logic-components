import { ChopLogicInputProps, ChopLogicSelectValue } from '../common.ts';
export interface ChopLogicSelectProps extends ChopLogicInputProps {
    options: ChopLogicSelectValue[];
    onChange?: (value?: ChopLogicSelectValue) => void;
    placeholder?: string;
    defaultValue?: string | number | readonly string[];
}
