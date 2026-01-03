import type { FocusEventHandler, HTMLInputAutoCompleteAttribute } from 'react';

import type { ChopLogicInputProps } from './_common';

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
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  debounceDelay?: number;
}
