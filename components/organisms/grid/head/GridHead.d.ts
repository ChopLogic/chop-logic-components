import { GridColumn } from '../../../../types';
import { FC } from '../../../../../node_modules/react';
type GridHeadProps = {
    columns: GridColumn[];
    gridId: string;
    selectable: boolean;
    isAllSelected: boolean;
    isAllCheckboxDisabled?: boolean;
    selectAll: () => void;
    deselectAll: () => void;
};
export declare const GridHead: FC<GridHeadProps>;
export {};
