import { AvatarProps } from '../../../types';
import { FC } from '../../../../node_modules/react';
declare const Avatar: FC<AvatarProps & {
    tooltip?: string;
    visibleOn?: "hover" | "click" | "focus" | "contextmenu";
}>;
export default Avatar;
