import { CommonInputProps } from 'utils/types';

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
  autoComplete?: React.HTMLInputAutoCompleteAttribute;
  onClear?: () => void;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
};
