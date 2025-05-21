import { default as React } from '../../../../../node_modules/react';
import { ChopLogicSelectValue } from '../../../../models';
type SelectDropdownProps = {
    options: ChopLogicSelectValue[];
    opened: boolean;
    dropdownId: string;
    comboboxId: string;
    onClose: () => void;
    selected?: ChopLogicSelectValue;
    onSelect: (id: string) => void;
    onClear: () => void;
};
declare const SelectDropdown: React.FC<SelectDropdownProps>;
export default SelectDropdown;
