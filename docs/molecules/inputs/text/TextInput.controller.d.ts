import { ChopLogicRegExpWithFlags, ChopLogicTextInputValidator } from '../../../models';
import { default as React, ChangeEventHandler } from '../../../../node_modules/react';
export declare function useChopLogicTextInputController({ name, defaultValue, onChange, onClear, required, validator, }: {
    name: string;
    required: boolean;
    validator?: ChopLogicRegExpWithFlags | ChopLogicTextInputValidator;
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
