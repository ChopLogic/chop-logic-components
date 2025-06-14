import { ChopLogicFormData, ChopLogicRegExpWithFlags, ChopLogicTextInputValidator } from '../../../models';
export declare function validateTextInputValue({ value, required, validator, }: {
    value: string;
    required: boolean;
    validator?: ChopLogicRegExpWithFlags | ChopLogicTextInputValidator;
}): boolean;
export declare function getTextInputInitialValue({ name, initialValues, defaultValue, }: {
    name: string;
    initialValues?: ChopLogicFormData;
    defaultValue?: string | number | readonly string[];
}): string;
