import { ChopLogicButtonProps } from '../../../models';
import { FC } from '../../../../node_modules/react';
declare const ChopLogicButton: FC<ChopLogicButtonProps & {
    tooltip?: string;
    visibleOn?: "hover" | "click" | "focus" | "contextmenu";
}>;
export default ChopLogicButton;
