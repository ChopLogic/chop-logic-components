import { ChangeEventHandler, FocusEventHandler, HTMLInputAutoCompleteAttribute } from 'react';

import { ChopLogicInputProps } from './_common';

export interface SearchProps extends ChopLogicInputProps {
  maxLength?: number;
  minLength?: number;
  placeholder?: string;
  autoComplete?: HTMLInputAutoCompleteAttribute;
  clearable?: boolean;
  spellCheck?: boolean;
  searchMode?: 'automatic' | 'manual';
  onSearch?: (searchTerm: string) => void;
  onClear?: () => void;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  debounceDelay?: number;
}
