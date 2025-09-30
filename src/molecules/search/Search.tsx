import { Button, Input, Label } from '@atoms';
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
  name = 'q',
  placeholder = 'Type to search...',
  disabled = false,
  clearable = true,
  spellCheck = false,
  autoComplete = 'off',
  debounceDelay = 300,
  ...rest
}) => {
  const { elementId } = useElementIds(id);
  const inputClass = getClassName([styles.wrapper, className]);
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Debounce the search value
  const debouncedSearchValue = useDebounce(searchValue, debounceDelay);

  // Handle search when debounced value changes
  useEffect(() => {
    if (onSearch && debouncedSearchValue !== undefined) {
      onSearch(debouncedSearchValue);
    }
  }, [debouncedSearchValue, onSearch]);

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
    // Trigger immediate search when search button is clicked
    if (onSearch) {
      onSearch(searchValue);
    }
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
      <Label label={label} required={false} inputId={elementId} />
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
          {clearable && searchValue && (
            <Button
              view={ButtonView.Inner}
              onClick={handleClear}
              label={`Clear search input for ${label}`}
              icon={IconName.Remove}
              disabled={disabled}
            />
          )}
          <Button view={ButtonView.Inner} onClick={handleSearchClick} label='Perform search' icon={IconName.Search} disabled={disabled} />
        </span>
      </Input>
    </div>
  );
};

export default Search;
