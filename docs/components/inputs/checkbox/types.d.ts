import { ChangeEventHandler } from '../../../../node_modules/react';
import { CommonInputProps } from '../../../../../../../../../src/utils/types';

export type ChopLogicCheckboxProps = CommonInputProps & {
    noLabel?: boolean;
    iconPosition?: 'left' | 'right';
    onChange?: ChangeEventHandler<HTMLInputElement>;
    defaultChecked?: boolean;
};
