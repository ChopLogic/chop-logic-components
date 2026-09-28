import { GridSortDirection } from '../../../../enums';
import { FC } from '../../../../../node_modules/react';
export type SortButtonProps = {
    direction: GridSortDirection | null;
    columnTitle?: string;
    onClick: () => void;
};
export declare const SortButton: FC<SortButtonProps>;
