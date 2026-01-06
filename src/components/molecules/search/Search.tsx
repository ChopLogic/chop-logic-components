import { Button, Input, Label } from '@components/atoms';
import { ButtonView, IconName } from '@enums';
import { useElementIds } from '@hooks';
import type { SearchProps } from '@types';
import { getClassName } from '@utils';
import { type FC, useRef } from 'react';

import { useSearchController } from './Search.controller';
import styles from './Search.module.scss';

const Search: FC<SearchProps> = ({
  label,
  onSearch,
  onBlur,
  onFocus,
  onClear,
  id,
  tabIndex,
  className,
  maxLength = 50,
  minLength = 1,
  searchMode = 'automatic',
  name = 'q',
  placeholder = 'Type to search...',
  disabled = false,
  clearable = true,
  spellCheck = false,
  autoComplete = 'off',
  debounceDelay = 500,
  required,
  ...rest
}) => {
  const { elementId } = useElementIds(id);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputClass = getClassName([styles.wrapper, className]);

  const {
    searchValue,
    isSearchButtonVisible,
    isLabelIconVisible,
    isClearButtonVisible,
    isSearchValueValid,
    handleChange,
    handleClear,
    handleSearchClick,
    handleKeyDown,
  } = useSearchController({
    onSearch,
    onClear,
    maxLength,
    minLength,
    searchMode,
    debounceDelay,
  });

  const handleClearWithFocus = () => {
    handleClear();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div {...rest} className={inputClass}>
      <Label
        label={label}
        required={!!required}
        inputId={elementId}
        icon={isLabelIconVisible ? IconName.Search : undefined}
        iconPosition={isLabelIconVisible ? 'left' : undefined}
      />
      <Input
        ref={inputRef}
        id={elementId}
        name={name}
        type="search"
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
        required={required}
      >
        <span>
          {clearable && isClearButtonVisible && (
            <Button
              view={ButtonView.Inner}
              onClick={handleClearWithFocus}
              label={`Clear search input for ${label}`}
              icon={IconName.Remove}
            />
          )}
          {isSearchButtonVisible && (
            <Button
              view={ButtonView.Inner}
              onClick={handleSearchClick}
              label="Perform search"
              icon={IconName.Search}
              disabled={disabled || !isSearchValueValid}
            />
          )}
        </span>
      </Input>
    </div>
  );
};

export default Search;
