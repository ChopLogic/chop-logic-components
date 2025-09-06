import { ChopLogicGridColumn } from '../../../../models';
import { FC } from '../../../../../node_modules/react';
type ChopLogicGridHeadProps = {
    columns: ChopLogicGridColumn[];
    gridId: string;
    selectable: boolean;
    isAllSelected: boolean;
    isAllCheckboxDisabled?: boolean;
    selectAll: () => void;
    deselectAll: () => void;
};
export declare const GridHead: FC<ChopLogicGridHeadProps>;
export {};
