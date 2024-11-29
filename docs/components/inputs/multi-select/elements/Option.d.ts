import { default as React } from '../../../../../node_modules/react';
import { MultiSelectValue } from '../../../../types';

type SelectOptionProps = {
    value: MultiSelectValue;
    onSelect: (id: string) => void;
};
declare const SelectOption: React.FC<SelectOptionProps>;
export default SelectOption;
