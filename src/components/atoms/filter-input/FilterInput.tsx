import { Button } from '@components/atoms';
import { ButtonView, IconName } from '@enums';
import { getClassName } from '@utils';
import { type ChangeEvent, type FC, type KeyboardEvent, useRef } from 'react';

import './FilterInput.css';

export interface FilterInputProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  placeholder: string;
  listboxId: string;
  className?: string;
}

const FilterInput: FC<FilterInputProps> = ({
  value,
  onChange,
  onClear,
  placeholder,
  listboxId,
  className,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const rootClass = getClassName(['cl-filter-input', className]);

  const hasNonWhitespaceValue = value.trim().length > 0;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleClear = () => {
    onClear();
    inputRef.current?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Home' || event.key === 'End') {
      event.stopPropagation();
    }
    if (event.key === 'Enter' && !event.nativeEvent.isComposing) {
      event.preventDefault();
    }
  };

  return (
    <div className={rootClass}>
      <input
        ref={inputRef}
        type="text"
        className="cl-filter-input__field"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        aria-label="Filter options"
        aria-controls={listboxId}
        tabIndex={0}
      />
      {hasNonWhitespaceValue && (
        <Button
          view={ButtonView.Inner}
          icon={IconName.Delete}
          onClick={handleClear}
          label="Clear filter"
          className="cl-filter-input__clear"
        />
      )}
    </div>
  );
};

export default FilterInput;
