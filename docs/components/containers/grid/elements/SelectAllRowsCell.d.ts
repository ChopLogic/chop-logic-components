import { default as React } from '../../../../../node_modules/react';
import { ChopLogicTheme } from '../../../../models';

type SelectAllGridRowsCheckbox = {
    gridId: string;
    isAllSelected: boolean;
    selectAll: () => void;
    deselectAll: () => void;
    disabled?: boolean;
    theme: ChopLogicTheme;
};
declare const SelectAllRowsCell: React.FC<SelectAllGridRowsCheckbox>;
export default SelectAllRowsCell;
