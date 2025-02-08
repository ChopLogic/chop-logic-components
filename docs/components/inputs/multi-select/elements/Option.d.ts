import { default as React } from '../../../../../node_modules/react';
import { ChopLogicMultiSelectValue, ChopLogicTheme } from '../../../../models';
type MultiSelectOptionProps = {
    value: ChopLogicMultiSelectValue;
    onSelect: (id: string) => void;
    theme: ChopLogicTheme;
};
declare const SelectOption: React.FC<MultiSelectOptionProps>;
export default SelectOption;
