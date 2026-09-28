import { ChopLogicInputProps } from './_common';
export interface RadioGroupOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface RadioGroupProps extends Omit<ChopLogicInputProps, 'title' | 'tabIndex'> {
    options: RadioGroupOption[];
    orientation?: 'vertical' | 'horizontal';
    value?: string;
    onChange?: (value: string) => void;
    defaultValue?: string;
}
