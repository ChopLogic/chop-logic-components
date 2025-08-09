import { ChopLogicButtonProps } from '../../../models';
import { default as React } from '../../../../node_modules/react';
declare const ChopLogicButton: React.FC<ChopLogicButtonProps & {
    tooltip?: string;
    visibleOn?: "hover" | "click" | "focus" | "contextmenu";
}>;
export default ChopLogicButton;
