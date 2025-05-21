import { default as React } from '../../../../../node_modules/react';
type SelectAllGridRowsCheckbox = {
    gridId: string;
    isAllSelected: boolean;
    selectAll: () => void;
    deselectAll: () => void;
    disabled?: boolean;
};
declare const SelectAllRowsCell: React.FC<SelectAllGridRowsCheckbox>;
export default SelectAllRowsCell;
