import { default as React, ChangeEventHandler } from '../../../../node_modules/react';
import { ChopLogicNumericInputValidator } from '../../../models';
export declare function useChopLogicNumericInputController({ name, defaultValue, onChange, onSpinButtonClick, min, max, step, required, validator, }: {
    name: string;
    defaultValue?: string | number | readonly string[];
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onSpinButtonClick?: (value?: number) => void;
    min?: string | number;
    max?: string | number;
    step: number;
    required: boolean;
    validator?: ChopLogicNumericInputValidator;
}): {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: number;
    valid: boolean;
    minValue: number;
    maxValue: number;
    increment: () => void;
    decrement: () => void;
};
