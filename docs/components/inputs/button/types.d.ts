import { MouseEventHandler } from '../../../../node_modules/react';
import { CommonInputProps } from '../../../../../../../../../src/utils/types';
import { ChopLogicIconName } from '../../../../../../../../../src/components/misc/icon/Icon';

export type ChopLogicButtonView = 'primary' | 'secondary' | 'danger' | 'icon';
export type ChopLogicButtonProps = Partial<CommonInputProps> & {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    view?: ChopLogicButtonView;
    icon?: ChopLogicIconName;
    text?: string;
    extended?: boolean;
    type?: 'button' | 'reset' | 'submit';
};
