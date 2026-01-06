import { useDebounce } from '@hooks';
import type { SearchProps } from '@types';
import { useCallback, useEffect, useRef, useState } from 'react';

export function useSearchController({
  onSearch,
  onClear,
  maxLength = 50,
  minLength = 1,
  searchMode = 'automatic',
  debounceDelay = 500,
}: Omit<
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
>) {
  const [searchValue, setSearchValue] = useState('');
  const isSearchButtonVisible = searchMode === 'manual';
  const isLabelIconVisible = !isSearchButtonVisible;
  const isClearButtonVisible = searchValue.length > 0;
  const isSearchValueValid =
    searchValue.length >= minLength &&
    searchValue.trim().length > 0 &&
    searchValue.length <= maxLength;
  const debouncedSearchValue = useDebounce(searchValue, debounceDelay);

  // Refs to access latest values in debounce effect
  const onSearchRef = useRef(onSearch);
  const searchModeRef = useRef(searchMode);
  const isSearchValueValidRef = useRef(isSearchValueValid);

  // Update refs when values change
  onSearchRef.current = onSearch;
  searchModeRef.current = searchMode;
  isSearchValueValidRef.current = isSearchValueValid;

  useEffect(() => {
    if (
      debouncedSearchValue.trim().length > 0 &&
      searchModeRef.current === 'automatic' &&
      isSearchValueValidRef.current
    ) {
      onSearchRef.current?.(debouncedSearchValue);
    }
  }, [debouncedSearchValue]);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
  }, []);

  const handleClear = useCallback(() => {
    setSearchValue('');
    onClear?.();
  }, [onClear]);

  const handleSearchClick = useCallback(() => {
    onSearchRef.current?.(searchValue);
  }, [searchValue]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        // Trigger immediate search on Enter
        event.preventDefault();
        if (onSearchRef.current) {
          onSearchRef.current(searchValue);
        }
      } else if (event.key === 'Escape') {
        // Clear on Escape
        event.preventDefault();
        handleClear();
      }
    },
    [handleClear, searchValue],
  );

  return {
    searchValue,
    isSearchButtonVisible,
    isLabelIconVisible,
    isClearButtonVisible,
    isSearchValueValid,
    handleChange,
    handleClear,
    handleSearchClick,
    handleKeyDown,
  };
}
