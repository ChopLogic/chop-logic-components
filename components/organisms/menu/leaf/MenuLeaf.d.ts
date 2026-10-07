import { MenuItem } from '../../../../types';
import { ReactElement } from '../../../../../node_modules/react';
type Props = {
    item: MenuItem;
    closeMenu?: () => void;
};
export declare const MenuLeaf: ({ item, closeMenu }: Props) => ReactElement;
export {};
