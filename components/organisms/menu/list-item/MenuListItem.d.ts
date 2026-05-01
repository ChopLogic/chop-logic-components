import { OrientationMode } from '../../../../enums';
import { MenuItem } from '../../../../types';
import { FC, PropsWithChildren } from '../../../../../node_modules/react';
type Props = PropsWithChildren & {
    item: MenuItem;
    mode: OrientationMode;
    openedOn?: 'hover' | 'click';
};
export declare const MenuListItem: FC<Props>;
export {};
