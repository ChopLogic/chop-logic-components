import { FC } from '../../../../node_modules/react';
import { ButtonProps } from '../../../types';
declare const Button: FC<ButtonProps & {
    tooltip?: string;
    visibleOn?: "hover" | "click" | "focus" | "contextmenu";
}>;
export default Button;
