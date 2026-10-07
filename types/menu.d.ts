import { IconName, OrientationMode } from '../enums';
import { HTMLAttributeAnchorTarget } from '../../node_modules/react';
import { ChopLogicComponentProps } from './_common';
export interface MenuProps extends ChopLogicComponentProps {
    items: MenuItem[];
    mode?: OrientationMode;
    openedOn?: 'hover' | 'click';
}
export interface MenuItem {
    label: string;
    id: string;
    nestedItems?: MenuItem[];
    icon?: IconName;
    link?: string;
    target?: HTMLAttributeAnchorTarget;
    onClick?: () => void;
    onHover?: () => void;
    onFocus?: () => void;
    className?: string;
}
