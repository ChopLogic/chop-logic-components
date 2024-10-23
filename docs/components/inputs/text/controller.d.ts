import { ChangeEventHandler } from '../../../../node_modules/react';
import { RegExpWithFlags, TextValidationFunction } from './types';

export declare function useChopLogicTextInputController({ name, defaultValue, onChange, onClear, required, validator, }: {
    name: string;
    required: boolean;
    validator?: RegExpWithFlags | TextValidationFunction;
    defaultValue?: string | number | readonly string[];
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onClear?: () => void;
}): {
    value: string;
    valid: boolean;
    passwordShown: boolean;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleClear: () => void;
    togglePassword: () => void;
};
