import { DropdownList } from '@components/molecules/select/dropdown/DropdownList';
import type { MultiSelectValue } from '@types';
import type { FC } from 'react';

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
  return (
    <DropdownList
      options={options}
      opened={opened}
      onClose={onClose}
      dropdownId={dropdownId}
      isSearchable={isSearchable}
      searchPlaceholder={searchPlaceholder}
      filterQuery={filterQuery}
      onFilterChange={onFilterChange}
      onFilterReset={onFilterReset}
    >
      {options.map((item) => (
        <MultiSelectOption key={item.id} value={item} onSelect={() => onSelect(item.id)} />
      ))}
    </DropdownList>
  );
};
