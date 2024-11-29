import { ChangeEventHandler, FocusEventHandler, HTMLInputAutoCompleteAttribute } from '../../../node_modules/react';
import { CommonInputProps } from './_common';

export type RegExpWithFlags = {
  regexp: string;
  flags?: string;
};
export type TextValidationFunction = (input: string) => boolean;
export type ChopLogicTextInputProps = CommonInputProps & {
  errorMessage?: string;
  clearable?: boolean;
  readOnly?: boolean;
  type?: 'text' | 'email' | 'password';
  validator?: RegExpWithFlags | TextValidationFunction;
  maxLength?: number;
  placeholder?: string;
  defaultValue?: string;
  autoComplete?: HTMLInputAutoCompleteAttribute;
  onClear?: () => void;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
};
