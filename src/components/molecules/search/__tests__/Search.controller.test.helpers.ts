import { renderHook } from '@testing-library/react';
import type { SearchProps } from '@types';
import { vi } from 'vitest';

import { useSearchController } from '../Search.controller';

type ControllerArgs = Omit<
  SearchProps,
  | 'label'
  | 'onBlur'
  | 'onFocus'
  | 'id'
  | 'tabIndex'
  | 'className'
  | 'name'
  | 'placeholder'
  | 'disabled'
  | 'clearable'
  | 'spellCheck'
  | 'autoComplete'
>;

export function renderSearchController(overrides?: Partial<ControllerArgs>) {
  return renderHook(() =>
    useSearchController({
      onSearch: vi.fn(),
      searchMode: 'automatic',
      debounceDelay: 500,
      ...overrides,
    }),
  );
}
