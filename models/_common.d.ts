import { CSSProperties } from '../../node_modules/react';
export interface ChopLogicComponentProps {
    id?: string;
    className?: string;
    style?: CSSProperties;
    tabIndex?: number;
    title?: string;
}
export interface ChopLogicInputProps extends ChopLogicComponentProps {
    label: string;
    name: string;
    disabled?: boolean;
    required?: boolean;
}
export type ChopLogicSelectValue = {
    id: string;
    label: string;
} & {
    [key in string]: unknown;
};
export type ChopLogicMultiSelectValue = ChopLogicSelectValue & {
    selected: boolean;
};
export type ChopLogicNumericInputValidator = (input?: number) => boolean;
export type ChopLogicTextInputValidator = (input: string) => boolean;
export type ChopLogicRegExpWithFlags = {
    regexp: string;
    flags?: string;
};
export type Dimensions = {
    width: number;
    height: number;
};
