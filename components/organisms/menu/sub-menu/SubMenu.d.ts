import { OrientationMode } from '../../../../enums';
import { MenuItem } from '../../../../types';
import { FC, PropsWithChildren } from '../../../../../node_modules/react';
type Props = PropsWithChildren & {
    item: MenuItem;
    isSubMenuOpened: boolean;
    mode: OrientationMode;
    toggleSubMenu: () => void;
    closeSubMenu: () => void;
    openSubMenu: () => void;
    openedOn?: 'hover' | 'click';
};
export declare const SubMenu: FC<Props>;
export {};
