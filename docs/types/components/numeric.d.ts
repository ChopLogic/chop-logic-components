import { ChangeEventHandler, FocusEventHandler } from '../../../node_modules/react';
import { CommonInputProps } from './_common';

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
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
};
