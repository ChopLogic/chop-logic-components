import { TagProps } from '../../../types';
import { FC } from '../../../../node_modules/react';
declare const Tag: FC<TagProps & {
    tooltip?: string;
    visibleOn?: "hover" | "click" | "focus" | "contextmenu";
}>;
export default Tag;
