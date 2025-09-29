import { Button, Input, Label } from '@atoms';
import { ButtonView, IconName } from '@enums';
import { useElementIds } from '@hooks';
import { SearchProps } from '@models';
import { getClassName } from '@utils';
import { FC } from 'react';

import styles from './Search.module.scss';

const Search: FC<SearchProps> = ({
  label,
  onChange,
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
  ...rest
}) => {
  const { elementId } = useElementIds(id);
  const inputClass = getClassName([styles.wrapper, className]);

  return (
    <div {...rest} className={inputClass}>
      <Label label={label} required={false} inputId={elementId} />
      <Input
        id={elementId}
        name={name}
        type='search'
        onChange={onChange}
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
          {clearable && (
            <Button
              view={ButtonView.Inner}
              onClick={onClear}
              label={`Clear search input for ${label}`}
              icon={IconName.Remove}
              disabled={disabled}
            />
          )}
          <Button view={ButtonView.Inner} label='Perform search' icon={IconName.Search} disabled={disabled} />
        </span>
      </Input>
    </div>
  );
};

export default Search;
