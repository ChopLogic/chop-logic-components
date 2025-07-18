import { default as React } from '../../../../node_modules/react';
import { ChopLogicMultiSelectValue } from '../../../models';
type Props = {
    opened: boolean;
    disabled: boolean;
    required: boolean;
    onClick: () => void;
    comboboxId: string;
    dropdownId: string;
    values?: ChopLogicMultiSelectValue[];
    placeholder?: string;
    name: string;
};
export declare const MultiSelectCombobox: React.FC<Props>;
export {};
