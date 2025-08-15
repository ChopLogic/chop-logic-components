import { ChangeEventHandler, FocusEventHandler, HTMLInputAutoCompleteAttribute } from 'react';

import { ChopLogicInputProps, ChopLogicRegExpWithFlags, TextInputValidator } from './_common';

export interface TextInputProps extends ChopLogicInputProps {
  errorMessage?: string;
  clearable?: boolean;
  readOnly?: boolean;
  type?: 'text' | 'email' | 'password';
  validator?: ChopLogicRegExpWithFlags | TextInputValidator;
  maxLength?: number;
  placeholder?: string;
  defaultValue?: string;
  autoComplete?: HTMLInputAutoCompleteAttribute;
  onClear?: () => void;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
}
