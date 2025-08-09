import { ChopLogicGridColumn } from '../../../models';
import { default as React } from '../../../../node_modules/react';
type ChopLogicGridHeadProps = {
    columns: ChopLogicGridColumn[];
    gridId: string;
    selectable: boolean;
    isAllSelected: boolean;
    isAllCheckboxDisabled?: boolean;
    selectAll: () => void;
    deselectAll: () => void;
};
export declare const GridHead: React.FC<ChopLogicGridHeadProps>;
export {};
