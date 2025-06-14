import { default as React } from '../../../../node_modules/react';
import { ChopLogicButtonProps } from '../../../models';
declare const ChopLogicButton: React.FC<ChopLogicButtonProps & {
    tooltip?: string;
    visibleOn?: "hover" | "click" | "focus" | "contextmenu";
}>;
export default ChopLogicButton;
