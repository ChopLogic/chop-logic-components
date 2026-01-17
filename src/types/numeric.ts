import type { ChangeEventHandler, FocusEventHandler } from 'react';

import type { ChopLogicInputProps, NumericInputValidator } from './_common';

export interface NumericInputProps extends ChopLogicInputProps {
  errorMessage?: string;
  validator?: NumericInputValidator;
  hasSpinButtons?: boolean;
  min?: number;
  max?: number;
  step?: number;
  readOnly?: boolean;
  defaultValue?: number;
  stateless?: boolean;
  value?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
}
