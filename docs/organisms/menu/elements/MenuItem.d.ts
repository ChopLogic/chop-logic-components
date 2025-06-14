import { default as React, PropsWithChildren } from '../../../../node_modules/react';
import { ChopLogicOrientationMode } from '../../../enums';
import { ChopLogicMenuItem } from '../../../models';
type MenuItemProps = PropsWithChildren & {
    item: ChopLogicMenuItem;
    mode: ChopLogicOrientationMode;
};
declare const MenuItem: React.FC<MenuItemProps>;
export default MenuItem;
