import { ChangeEventHandler, FocusEventHandler } from 'react';

import { ChopLogicInputProps, ChopLogicNumericInputValidator } from './_common';

export interface ChopLogicNumericInputProps extends ChopLogicInputProps {
  errorMessage?: string;
  validator?: ChopLogicNumericInputValidator;
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
