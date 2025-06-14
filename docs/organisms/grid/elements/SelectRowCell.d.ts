import { default as React } from '../../../../node_modules/react';
type SelectAllGridRowsCheckbox = {
    rowId: string;
    isRowSelected: boolean;
    selectRowById: (id: string) => void;
    deselectRowById: (id: string) => void;
    disabled?: boolean;
};
declare const SelectGridRowCell: React.FC<SelectAllGridRowsCheckbox>;
export default SelectGridRowCell;
