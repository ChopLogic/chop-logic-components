import { ChangeEventHandler } from '../../../node_modules/react';
import { ChopLogicInputProps } from '../common.ts';
export interface ChopLogicCheckboxProps extends ChopLogicInputProps {
    noLabel?: boolean;
    iconPosition?: 'left' | 'right';
    onChange?: ChangeEventHandler<HTMLInputElement>;
    defaultChecked?: boolean;
}
