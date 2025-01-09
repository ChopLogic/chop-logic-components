import { default as React } from '../../../../../node_modules/react';
import { ChopLogicMenuItem, ChopLogicTheme } from '../../../../models';

type MenuLeafProps = {
    item: ChopLogicMenuItem;
    theme: ChopLogicTheme;
};
declare const MenuLeaf: React.FC<MenuLeafProps>;
export default MenuLeaf;
