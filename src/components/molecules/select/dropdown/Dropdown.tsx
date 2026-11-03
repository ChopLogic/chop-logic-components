import type { SelectValue } from '@types';
import { moveFocusOnElementById } from '@utils';
import type { FC } from 'react';

import { SelectOption } from '../option/Option';
import { DropdownList } from './DropdownList';

type Props = {
  options: SelectValue[];
  opened: boolean;
  dropdownId: string;
  comboboxId: string;
  onClose: () => void;
  selected?: SelectValue;
  onSelect: (id: string) => void;
  onClear: () => void;
  isSearchable?: boolean;
  searchPlaceholder?: string;
  filterQuery?: string;
  onFilterChange?: (value: string) => void;
  onFilterReset?: () => void;
};

export const SelectDropdown: FC<Props> = ({
  options,
  opened,
  onClose,
  onSelect,
  dropdownId,
  comboboxId,
  selected,
  onClear,
  isSearchable = false,
  searchPlaceholder = 'Filter options...',
  filterQuery = '',
  onFilterChange,
  onFilterReset,
}) => {
  const handleOptionSelect = (id: string) => {
    onSelect(id);
    onClose();
    moveFocusOnElementById(comboboxId);
  };

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
        <SelectOption
          key={item.id}
          value={item}
          onSelect={() => handleOptionSelect(item.id)}
          onClear={onClear}
          selected={item.id === selected?.id}
        />
      ))}
    </DropdownList>
  );
};
