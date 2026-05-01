import { FormValues, NumericInputValidator } from '../../../types';
export declare function getNumericInputInitialValue({ name, initialValues, defaultValue, }: {
    name: string;
    initialValues?: FormValues;
    defaultValue?: string | number | readonly string[];
}): number;
export declare function validateNumericInputValue({ value, required, validator, maxValue, minValue, }: {
    value?: number;
    required?: boolean;
    validator?: NumericInputValidator;
    maxValue?: number;
    minValue?: number;
}): boolean;
