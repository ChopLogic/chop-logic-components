import { ChopLogicOrientationMode } from '../../../enums';
import { ChopLogicMenuItem } from '../../../models';
import { default as React, PropsWithChildren } from '../../../../node_modules/react';
type Props = PropsWithChildren & {
    item: ChopLogicMenuItem;
    isSubMenuOpened: boolean;
    mode: ChopLogicOrientationMode;
    toggleSubMenu: () => void;
    closeSubMenu: () => void;
    openSubMenu: () => void;
    openedOn?: 'hover' | 'click';
};
export declare const SubMenu: React.FC<Props>;
export {};
