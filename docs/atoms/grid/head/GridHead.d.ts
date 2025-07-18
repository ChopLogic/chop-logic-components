import { default as React } from '../../../../node_modules/react';
import { ChopLogicGridColumn } from '../../../models';
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
