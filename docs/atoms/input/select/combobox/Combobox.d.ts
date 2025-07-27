import { ChopLogicSelectValue } from '../../../../models';
import { default as React } from '../../../../../node_modules/react';
type Props = {
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
export declare const SelectCombobox: React.FC<Props>;
export {};
