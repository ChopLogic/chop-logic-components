import { Button, Input, Label } from '@components/atoms';
import { ButtonView, IconName } from '@enums';
import { useElementIds, useFormLoading } from '@hooks';
import type { SearchProps } from '@types';
import { getClassName } from '@utils';
import { type FC, useRef } from 'react';

import './Search.css';
import { useSearchController } from './Search.controller';

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
  isLoading: isLoadingProp,
  ...rest
}) => {
  const isLoading = useFormLoading(isLoadingProp);
  const { elementId } = useElementIds(id);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputClass = getClassName(['cl-search', className, { 'cl-search_loading': isLoading }]);

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
    if (isLoading) return;
    handleClear();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSearchClickWithLoading = () => {
    if (isLoading) return;
    handleSearchClick();
  };

  const handleKeyDownWithLoading = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (isLoading && event.key === 'Enter') {
      event.preventDefault();
      return;
    }
    handleKeyDown(event);
  };

  return (
    <div {...rest} className={inputClass} aria-busy={isLoading}>
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
        onKeyDown={handleKeyDownWithLoading}
        onBlur={onBlur}
        onFocus={onFocus}
        disabled={disabled}
        readOnly={isLoading}
        aria-readonly={isLoading || undefined}
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
              icon={IconName.Delete}
              disabled={isLoading}
            />
          )}
          {isSearchButtonVisible && (
            <Button
              view={ButtonView.Inner}
              onClick={handleSearchClickWithLoading}
              label="Perform search"
              icon={IconName.Search}
              disabled={disabled || isLoading || !isSearchValueValid}
            />
          )}
        </span>
        {isLoading && <div className="cl-input__shimmer" />}
      </Input>
    </div>
  );
};

export default Search;
