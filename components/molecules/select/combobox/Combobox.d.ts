import { SelectValue } from '../../../../types';
import { FC } from '../../../../../node_modules/react';
type Props = {
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
export declare const SelectCombobox: FC<Props>;
export {};
