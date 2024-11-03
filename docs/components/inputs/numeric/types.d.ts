import { CommonInputProps } from '../../../../../../../../../src/utils/types';

export type NumericValidationFunction = (input?: number) => boolean;
export type ChopLogicNumericInputProps = CommonInputProps & {
    errorMessage?: string;
    validator?: NumericValidationFunction;
    hasSpinButtons?: boolean;
    min?: number;
    max?: number;
    step?: number;
    readOnly?: boolean;
    defaultValue?: number;
    onSpinButtonClick?: (value?: number) => void;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
};
