import { ElementSize, IconName } from '../../../enums';
import { FC } from '../../../../node_modules/react';
type LabelProps = {
    label: string;
    required: boolean;
    inputId: string;
    isTextHidden?: boolean;
    icon?: IconName;
    iconPosition?: 'left' | 'right';
    iconSize?: ElementSize;
    disabled?: boolean;
    className?: string;
    testId?: string;
};
declare const Label: FC<LabelProps>;
export default Label;
