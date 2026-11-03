import { FilterInput } from '@components/atoms';
import { useDropdownSearch } from '@hooks';
import type { SelectValue } from '@types';
import { getClassName, handleDropdownListKeyPress } from '@utils';
import type { FC, ReactNode } from 'react';

import './Dropdown.css';

type Props = {
  options: SelectValue[];
  opened: boolean;
  dropdownId: string;
  onClose: () => void;
  isSearchable?: boolean;
  searchPlaceholder?: string;
  filterQuery?: string;
  onFilterChange?: (value: string) => void;
  onFilterReset?: () => void;
  children: ReactNode;
};

export const DropdownList: FC<Props> = ({
  options,
  opened,
  onClose,
  dropdownId,
  isSearchable = false,
  searchPlaceholder = 'Filter options...',
  filterQuery = '',
  onFilterChange,
  onFilterReset,
  children,
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
        children
      )}
      <li aria-live="polite" aria-atomic="true" className="cl-select-dropdown__aria-live">
        {ariaLiveMessage}
      </li>
    </ul>
  );
};
