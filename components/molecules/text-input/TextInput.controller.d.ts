import { ChopLogicRegExpWithFlags, TextInputValidator } from '../../../types';
import { ChangeEvent, ChangeEventHandler } from '../../../../node_modules/react';
export declare function useTextInputController({ name, defaultValue, onChange, onClear, required, validator, }: {
    name: string;
    required: boolean;
    validator?: ChopLogicRegExpWithFlags | TextInputValidator;
    defaultValue?: string | number | readonly string[];
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onClear?: () => void;
}): {
    value: string;
    valid: boolean;
    passwordShown: boolean;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleClear: () => void;
    togglePassword: () => void;
};
