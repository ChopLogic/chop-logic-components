import { default as React } from '../../../../../node_modules/react';
import { ChopLogicTheme } from '../../../../types';

type SelectAllGridRowsCheckbox = {
    rowId: string;
    isRowSelected: boolean;
    selectRowById: (id: string) => void;
    deselectRowById: (id: string) => void;
    disabled?: boolean;
    theme: ChopLogicTheme;
};
declare const SelectGridRowCell: React.FC<SelectAllGridRowsCheckbox>;
export default SelectGridRowCell;
