import { default as React } from '../../../../../node_modules/react';
import { ChopLogicSelectValue } from '../../../../models';
type SelectComboboxProps = {
    opened: boolean;
    disabled: boolean;
    required: boolean;
    onClick: () => void;
    comboboxId: string;
    dropdownId: string;
    selected?: ChopLogicSelectValue;
    placeholder?: string;
    name: string;
};
declare const SelectCombobox: React.FC<SelectComboboxProps>;
export default SelectCombobox;
