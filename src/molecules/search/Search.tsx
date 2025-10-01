import { Button, Icon, Input, Label } from '@atoms';
import { ButtonView, IconName } from '@enums';
import { useElementIds } from '@hooks';
import { useDebounce } from '@hooks/use-debounce/use-debounce';
import { SearchProps } from '@models';
import { getClassName } from '@utils';
import { FC, useCallback, useEffect, useRef, useState } from 'react';

import styles from './Search.module.scss';

const Search: FC<SearchProps> = ({
  label,
  onSearch,
  onBlur,
  onFocus,
  onClear,
  maxLength,
  minLength,
  id,
  tabIndex,
  className,
  searchMode = 'automatic',
  name = 'q',
  placeholder = 'Type to search...',
  disabled = false,
  clearable = true,
  spellCheck = false,
  autoComplete = 'off',
  debounceDelay = 500,
  ...rest
}) => {
  const { elementId } = useElementIds(id);
  const inputClass = getClassName([styles.wrapper, className]);
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const isSearchButtonVisible = searchMode === 'manual';
  const isClearButtonVisible = clearable && searchValue.length > 0;

  // Debounce the search value
  const debouncedSearchValue = useDebounce(searchValue, debounceDelay);

  // Handle search when debounced value changes
  useEffect(() => {
    if (debouncedSearchValue.length > 0 && searchMode === 'automatic') {
      onSearch?.(debouncedSearchValue);
    }
  }, [debouncedSearchValue]);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
  }, []);

  const handleClear = useCallback(() => {
    setSearchValue('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
    onClear?.();
  }, [onClear]);

  const handleSearchClick = useCallback(() => {
    onSearch?.(searchValue);
  }, [onSearch, searchValue]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        // Trigger immediate search on Enter
        event.preventDefault();
        if (onSearch) {
          onSearch(searchValue);
        }
      } else if (event.key === 'Escape') {
        // Clear on Escape
        event.preventDefault();
        handleClear();
      }
    },
    [onSearch, searchValue, handleClear],
  );

  return (
    <div {...rest} className={inputClass}>
      <Label
        label={label}
        required={false}
        inputId={elementId}
        icon={!isSearchButtonVisible ? <Icon name={IconName.Search} /> : undefined}
        iconPosition={!isSearchButtonVisible ? 'left' : undefined}
      />
      <Input
        ref={inputRef}
        id={elementId}
        name={name}
        type='search'
        value={searchValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={onBlur}
        onFocus={onFocus}
        disabled={disabled}
        placeholder={placeholder}
        autoComplete={autoComplete}
        maxLength={maxLength}
        minLength={minLength}
        spellCheck={spellCheck}
        tabIndex={tabIndex}
      >
        <span>
          {isClearButtonVisible && (
            <Button
              view={ButtonView.Inner}
              onClick={handleClear}
              label={`Clear search input for ${label}`}
              icon={IconName.Remove}
              disabled={disabled}
            />
          )}
          {isSearchButtonVisible && (
            <Button view={ButtonView.Inner} onClick={handleSearchClick} label='Perform search' icon={IconName.Search} disabled={disabled} />
          )}
        </span>
      </Input>
    </div>
  );
};

export default Search;
