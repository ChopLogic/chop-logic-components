import { default as React } from '../../../../../node_modules/react';
import { ChopLogicMultiSelectValue } from '../../../../models';
type MultiSelectDropdownProps = {
    options: ChopLogicMultiSelectValue[];
    opened: boolean;
    dropdownId: string;
    onClose: () => void;
    onSelect: (id: string) => void;
};
declare const MultiSelectDropdown: React.FC<MultiSelectDropdownProps>;
export default MultiSelectDropdown;
