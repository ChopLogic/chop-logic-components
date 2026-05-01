import { MultiSelectValue } from '../../../types';
import { FC } from '../../../../node_modules/react';
type Props = {
    opened: boolean;
    disabled: boolean;
    required: boolean;
    onClick: () => void;
    comboboxId: string;
    dropdownId: string;
    values?: MultiSelectValue[];
    placeholder?: string;
    name: string;
};
export declare const MultiSelectCombobox: FC<Props>;
export {};
