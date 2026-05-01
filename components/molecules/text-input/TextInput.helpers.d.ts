import { ChopLogicRegExpWithFlags, FormValues, TextInputValidator } from '../../../types';
export declare function validateTextInputValue({ value, required, validator, }: {
    value: string;
    required: boolean;
    validator?: ChopLogicRegExpWithFlags | TextInputValidator;
}): boolean;
export declare function getTextInputInitialValue({ name, initialValues, defaultValue, }: {
    name: string;
    initialValues?: FormValues;
    defaultValue?: string | number | readonly string[];
}): string;
