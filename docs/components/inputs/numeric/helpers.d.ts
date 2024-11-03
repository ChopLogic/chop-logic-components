import { ChopLogicFormData } from '../../../../../../../../../src/components/containers/form/types';
import { NumericValidationFunction } from './types';

export declare function getNumericInputInitialValue({ name, initialValues, defaultValue, }: {
    name: string;
    initialValues?: ChopLogicFormData;
    defaultValue?: string | number | readonly string[];
}): number;
export declare function validateNumericInputValue({ value, required, validator, maxValue, minValue, }: {
    value?: number;
    required?: boolean;
    validator?: NumericValidationFunction;
    maxValue?: number;
    minValue?: number;
}): boolean;
