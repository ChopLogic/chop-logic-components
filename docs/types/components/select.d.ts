import { ChopLogicTheme } from '..';
import { CommonInputProps } from './_common';

export type SelectValue = {
    id: string;
    label: string;
} & {
    [key in string]: unknown;
};
export type ChopLogicSelectProps = CommonInputProps & {
    options: SelectValue[];
    onChange?: (value?: SelectValue) => void;
    placeholder?: string;
    defaultValue?: string | number | readonly string[];
};
export type SelectOptionProps = {
    value: SelectValue;
    selected: boolean;
    onSelect: (id: string) => void;
    onClear: () => void;
    theme: ChopLogicTheme;
};
export type SelectComboboxProps = {
    opened: boolean;
    disabled: boolean;
    required: boolean;
    onClick: () => void;
    comboboxId: string;
    dropdownId: string;
    selected?: SelectValue;
    placeholder?: string;
    name: string;
    theme: ChopLogicTheme;
};
export type SelectDropdownProps = {
    options: SelectValue[];
    opened: boolean;
    dropdownId: string;
    comboboxId: string;
    onClose: () => void;
    selected?: SelectValue;
    onSelect: (id: string) => void;
    onClear: () => void;
    theme: ChopLogicTheme;
};
