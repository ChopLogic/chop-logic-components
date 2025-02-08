import { default as React } from '../../../../../node_modules/react';
import { ChopLogicSelectValue, ChopLogicTheme } from '../../../../models';
type SelectDropdownProps = {
    options: ChopLogicSelectValue[];
    opened: boolean;
    dropdownId: string;
    comboboxId: string;
    onClose: () => void;
    selected?: ChopLogicSelectValue;
    onSelect: (id: string) => void;
    onClear: () => void;
    theme: ChopLogicTheme;
};
declare const SelectDropdown: React.FC<SelectDropdownProps>;
export default SelectDropdown;
