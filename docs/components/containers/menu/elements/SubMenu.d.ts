import { default as React, PropsWithChildren } from '../../../../../node_modules/react';
import { ChopLogicOrientationMode } from '../../../../enums';
import { ChopLogicMenuItem, ChopLogicTheme } from '../../../../models';

type SubMenuProps = PropsWithChildren & {
    item: ChopLogicMenuItem;
    theme: ChopLogicTheme;
    isSubMenuOpened: boolean;
    mode: ChopLogicOrientationMode;
    toggleSubMenu: () => void;
    closeSubMenu: () => void;
};
declare const SubMenu: React.FC<SubMenuProps>;
export default SubMenu;
