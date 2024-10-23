import { ChopLogicGridColumn } from '../types';

type ChopLogicGridHeadProps = {
    columns: ChopLogicGridColumn[];
    gridId: string;
    selectable: boolean;
    isAllSelected: boolean;
    isAllCheckboxDisabled?: boolean;
    selectAll: () => void;
    deselectAll: () => void;
};
declare const ChopLogicGridHead: React.FC<ChopLogicGridHeadProps>;
export default ChopLogicGridHead;
