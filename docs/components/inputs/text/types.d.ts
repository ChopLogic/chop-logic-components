/// <reference types="react" />
export type RegExpWithFlags = {
    regexp: string;
    flags?: string;
};
export type TextValidationFunction = (input: string) => boolean;
export type ChopLogicTextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    label: string;
    errorMessage?: string;
    clearable?: boolean;
    onClear?: () => void;
    type?: 'text' | 'email' | 'password';
    validator?: RegExpWithFlags | TextValidationFunction;
};
