import { ChangeEventHandler, FocusEventHandler, HTMLInputAutoCompleteAttribute } from '../../../node_modules/react';
import { ChopLogicInputProps, ChopLogicRegExpWithFlags, ChopLogicTextInputValidator } from '../common.ts';
export interface ChopLogicTextInputProps extends ChopLogicInputProps {
    errorMessage?: string;
    clearable?: boolean;
    readOnly?: boolean;
    type?: 'text' | 'email' | 'password';
    validator?: ChopLogicRegExpWithFlags | ChopLogicTextInputValidator;
    maxLength?: number;
    placeholder?: string;
    defaultValue?: string;
    autoComplete?: HTMLInputAutoCompleteAttribute;
    onClear?: () => void;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    onFocus?: FocusEventHandler<HTMLInputElement>;
}
