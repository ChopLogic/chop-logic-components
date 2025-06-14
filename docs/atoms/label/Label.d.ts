import { FC, ReactElement } from '../../../node_modules/react';
type LabelProps = {
    label: string;
    required: boolean;
    inputId: string;
    isTextHidden?: boolean;
    icon?: ReactElement;
    iconPosition?: 'left' | 'right';
};
declare const Label: FC<LabelProps>;
export default Label;
