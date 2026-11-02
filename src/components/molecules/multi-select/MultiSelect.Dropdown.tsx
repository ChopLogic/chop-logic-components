import { FilterInput } from '@components/atoms';
import { useDropdownSearch } from '@hooks';
import type { MultiSelectValue } from '@types';
import { getClassName, handleDropdownListKeyPress } from '@utils';
import type { FC } from 'react';

import '../select/dropdown/Dropdown.css';
import { MultiSelectOption } from './Option';

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
  const { ariaLiveMessage, hasNoMatchingOptions, handleFilterChange, handleFilterClear } =
    useDropdownSearch({
      optionsCount: options.length,
      opened,
      isSearchable,
      filterQuery,
      onFilterChange,
      onFilterReset,
    });

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
      {isSearchable && (
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
