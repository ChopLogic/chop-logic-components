import { default as React, PropsWithChildren } from '../../../../../node_modules/react';
import { ChopLogicOrientationMode } from '../../../../enums';
import { ChopLogicMenuItem, ChopLogicTheme } from '../../../../models';

type MenuItemProps = PropsWithChildren & {
    item: ChopLogicMenuItem;
    theme: ChopLogicTheme;
    mode: ChopLogicOrientationMode;
};
declare const MenuItem: React.FC<MenuItemProps>;
export default MenuItem;
