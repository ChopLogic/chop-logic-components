import { GridSortDirection } from '../../../../enums';
import { GridFilterCondition } from '../../../../types';
import { FC } from '../../../../../node_modules/react';
export type GridHeaderCellProps = {
    title?: string;
    component?: React.ReactElement;
    sortable?: boolean;
    sortDirection?: GridSortDirection | null;
    onSortClick?: () => void;
    filterable?: boolean;
    columnConditions?: GridFilterCondition[];
    onApplyFilter?: (condition: GridFilterCondition) => void;
    onClearFilter?: () => void;
};
export declare const GridHeaderCell: FC<GridHeaderCellProps>;
