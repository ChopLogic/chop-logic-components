import { default as React, PropsWithChildren } from '../../../../../node_modules/react';
import { ChopLogicOrientationMode } from '../../../../enums';
import { ChopLogicMenuItem } from '../../../../models';
type SubMenuProps = PropsWithChildren & {
    item: ChopLogicMenuItem;
    isSubMenuOpened: boolean;
    mode: ChopLogicOrientationMode;
    toggleSubMenu: () => void;
    closeSubMenu: () => void;
};
declare const SubMenu: React.FC<SubMenuProps>;
export default SubMenu;
