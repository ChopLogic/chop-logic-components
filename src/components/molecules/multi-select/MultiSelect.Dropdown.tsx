import { FilterInput } from '@components/atoms';
import { useDebounce } from '@hooks';
import type { MultiSelectValue } from '@types';
import { getClassName, handleDropdownListKeyPress } from '@utils';
import { type FC, useEffect, useState } from 'react';

import '../select/dropdown/Dropdown.css';
import { MultiSelectOption } from './Option';

const ARIA_LIVE_DEBOUNCE_MS = 300;

type Props = {
  options: MultiSelectValue[];
  opened: boolean;
  dropdownId: string;
  onClose: () => void;
  onSelect: (id: string) => void;
  isSearchable?: boolean;
  searchPlaceholder?: string;
  filterQuery?: string;
  onFilterChange?: (value: string) => void;
  onFilterReset?: () => void;
};

export const MultiSelectDropdown: FC<Props> = ({
  options,
  opened,
  onClose,
  onSelect,
  dropdownId,
  isSearchable = false,
  searchPlaceholder = 'Filter options...',
  filterQuery = '',
  onFilterChange,
  onFilterReset,
}) => {
  const [ariaLiveMessage, setAriaLiveMessage] = useState('');
  const debouncedFilterQuery = useDebounce(filterQuery, ARIA_LIVE_DEBOUNCE_MS);

  const shouldRenderFilterInput = isSearchable;
  const hasNoMatchingOptions = options.length === 0 && filterQuery.trim().length > 0;

  useEffect(() => {
    if (!opened || !isSearchable) {
      setAriaLiveMessage('');
      return;
    }

    if (debouncedFilterQuery.trim().length > 0) {
      if (options.length === 0) {
        setAriaLiveMessage('No matching options');
      } else {
        setAriaLiveMessage(`${options.length} option${options.length === 1 ? '' : 's'} available`);
      }
    } else {
      setAriaLiveMessage('');
    }
  }, [debouncedFilterQuery, options.length, opened, isSearchable]);

  const handleFilterChange = (value: string) => {
    onFilterChange?.(value);
  };

  const handleFilterClear = () => {
    onFilterReset?.();
  };

  const dropdownClass = getClassName([
    'cl-select-dropdown',
    { 'cl-select-dropdown_opened': opened },
  ]);

  return (
    <ul
      role="listbox"
      id={dropdownId}
      tabIndex={-1}
      onKeyDown={(e) => handleDropdownListKeyPress({ e, options, onClose })}
      className={dropdownClass}
    >
      {shouldRenderFilterInput && (
        <li className="cl-select-dropdown__filter-container" role="presentation">
          <FilterInput
            value={filterQuery}
            onChange={handleFilterChange}
            onClear={handleFilterClear}
            placeholder={searchPlaceholder}
            listboxId={dropdownId}
          />
        </li>
      )}
      {hasNoMatchingOptions ? (
        <li className="cl-select-dropdown__no-options" role="status">
          No matching options
        </li>
      ) : (
        options.map((item) => (
          <MultiSelectOption key={item.id} value={item} onSelect={() => onSelect(item.id)} />
        ))
      )}
      <li aria-live="polite" aria-atomic="true" className="cl-select-dropdown__aria-live">
        {ariaLiveMessage}
      </li>
    </ul>
  );
};
