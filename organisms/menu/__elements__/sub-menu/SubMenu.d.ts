import { ChopLogicOrientationMode } from '../../../../enums';
import { ChopLogicMenuItem } from '../../../../models';
import { FC, PropsWithChildren } from '../../../../../node_modules/react';
type Props = PropsWithChildren & {
    item: ChopLogicMenuItem;
    isSubMenuOpened: boolean;
    mode: ChopLogicOrientationMode;
    toggleSubMenu: () => void;
    closeSubMenu: () => void;
    openSubMenu: () => void;
    openedOn?: 'hover' | 'click';
};
export declare const SubMenu: FC<Props>;
export {};
