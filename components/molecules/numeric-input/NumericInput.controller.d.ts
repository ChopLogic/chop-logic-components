import { NumericInputValidator } from '../../../types';
import { ChangeEvent, ChangeEventHandler } from '../../../../node_modules/react';
export declare function useNumericInputController({ name, defaultValue, onChange, onDecrement, onIncrement, min, max, step, required, validator, }: {
    name: string;
    defaultValue?: string | number | readonly string[];
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onIncrement?: () => void;
    onDecrement?: () => void;
    min?: string | number;
    max?: string | number;
    step: number;
    required: boolean;
    validator?: NumericInputValidator;
}): {
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value: number;
    valid: boolean;
    minValue: number;
    maxValue: number;
    handleIncrement: () => void;
    handleDecrement: () => void;
};
