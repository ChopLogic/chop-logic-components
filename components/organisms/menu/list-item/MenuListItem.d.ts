import { OrientationMode } from '../../../../enums';
import { MenuItem } from '../../../../types';
import { FC, PropsWithChildren } from '../../../../../node_modules/react';
type Props = PropsWithChildren & {
    item: MenuItem;
    mode: OrientationMode;
    openedOn?: 'hover' | 'click';
    level: number;
};
export declare const MenuListItem: FC<Props>;
export {};
