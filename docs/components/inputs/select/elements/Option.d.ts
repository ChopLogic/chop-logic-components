import { default as React } from '../../../../../node_modules/react';
import { ChopLogicSelectValue, ChopLogicTheme } from '../../../../models';

type SelectOptionProps = {
    value: ChopLogicSelectValue;
    selected: boolean;
    onSelect: (id: string) => void;
    onClear: () => void;
    theme: ChopLogicTheme;
};
declare const SelectOption: React.FC<SelectOptionProps>;
export default SelectOption;
