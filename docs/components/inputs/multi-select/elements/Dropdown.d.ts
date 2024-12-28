import { default as React } from '../../../../../node_modules/react';
import { ChopLogicMultiSelectValue, ChopLogicTheme } from '../../../../models';

type MultiSelectDropdownProps = {
    options: ChopLogicMultiSelectValue[];
    opened: boolean;
    dropdownId: string;
    onClose: () => void;
    onSelect: (id: string) => void;
    theme: ChopLogicTheme;
};
declare const MultiSelectDropdown: React.FC<MultiSelectDropdownProps>;
export default MultiSelectDropdown;
