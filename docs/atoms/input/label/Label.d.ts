import { FC, ReactElement } from '../../../../node_modules/react';
type LabelProps = {
    label: string;
    required: boolean;
    inputId: string;
    isTextHidden?: boolean;
    icon?: ReactElement;
    iconPosition?: 'left' | 'right';
};
export declare const Label: FC<LabelProps>;
export {};
