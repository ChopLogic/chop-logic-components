import { CommonInputProps } from 'utils/types';

export type RegExpWithFlags = {
  regexp: string;
  flags?: string;
};

export type TextValidationFunction = (input: string) => boolean;

export type ChopLogicTextInputProps = CommonInputProps & {
  name: string;
  label: string;
  errorMessage?: string;
  clearable?: boolean;
  readOnly?: boolean;
  onClear?: () => void;
  type?: 'text' | 'email' | 'password';
  validator?: RegExpWithFlags | TextValidationFunction;
  maxLength?: number;
  placeholder?: string;
  defaultValue?: string;
  autoComplete?: React.HTMLInputAutoCompleteAttribute;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
};
