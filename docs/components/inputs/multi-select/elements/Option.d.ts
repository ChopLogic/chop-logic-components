import { default as React } from '../../../../../node_modules/react';
import { ChopLogicMultiSelectValue } from '../../../../models';
type MultiSelectOptionProps = {
    value: ChopLogicMultiSelectValue;
    onSelect: (id: string) => void;
};
declare const SelectOption: React.FC<MultiSelectOptionProps>;
export default SelectOption;
