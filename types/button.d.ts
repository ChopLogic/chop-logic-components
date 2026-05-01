import { ButtonView, ElementSize, IconName } from '../enums';
import { ButtonHTMLAttributes } from '../../node_modules/react';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    view?: ButtonView;
    icon?: IconName;
    text?: string;
    extended?: boolean;
    tooltip?: string;
    label?: string;
    iconSize?: ElementSize;
}
