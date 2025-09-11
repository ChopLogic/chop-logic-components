import { ChangeEventHandler, FocusEventHandler } from 'react';

import { ChopLogicInputProps, NumericInputValidator } from './_common';

export interface NumericInputProps extends ChopLogicInputProps {
  errorMessage?: string;
  validator?: NumericInputValidator;
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
}
