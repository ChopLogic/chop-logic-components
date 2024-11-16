import { default as React } from '../../../../../node_modules/react';
import { SelectValue } from '../../../../../../../../../../src/utils/types.ts';

type SelectComboboxProps = {
    opened: boolean;
    disabled: boolean;
    required: boolean;
    onClick: () => void;
    comboboxId: string;
    dropdownId: string;
    selected?: SelectValue;
    placeholder?: string;
    name: string;
};
declare const SelectCombobox: React.FC<SelectComboboxProps>;
export default SelectCombobox;
