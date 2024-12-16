import { default as React } from '../../../../node_modules/react';
import { ChopLogicButtonView } from '../../../enums';

declare const _default: React.FC<Partial<import('../../../types/components/_common').CommonInputProps> & {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    onFocus?: React.FocusEventHandler<HTMLButtonElement>;
    onBlur?: React.FocusEventHandler<HTMLButtonElement>;
    view?: ChopLogicButtonView;
    icon?: import('../../../enums').ChopLogicIconName;
    text?: string;
    extended?: boolean;
    type?: "button" | "reset" | "submit";
    tooltip?: string;
} & {
    tooltip?: string;
    visibleOn?: "hover" | "click" | "focus" | "contextmenu";
}>;
export default _default;
