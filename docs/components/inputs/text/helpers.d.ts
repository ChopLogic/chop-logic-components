import { ChopLogicFormData, RegExpWithFlags, TextValidationFunction } from '../../../types';

export declare function validateTextInputValue({ value, required, validator, }: {
    value: string;
    required: boolean;
    validator?: RegExpWithFlags | TextValidationFunction;
}): boolean;
export declare function getTextInputInitialValue({ name, initialValues, defaultValue, }: {
    name: string;
    initialValues?: ChopLogicFormData;
    defaultValue?: string | number | readonly string[];
}): string;
