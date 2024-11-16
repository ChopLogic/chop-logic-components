import React from 'react';
import { handleDropdownListKeyPress } from 'utils/handle-dropdown-list-key-press.ts';

import { StyledMultiSelectDropdown } from '../MultiSelect.styled';
import { MultiSelectDropdownProps } from '../types';

import SelectOption from './Option';

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({ options, opened, onClose, onSelect, dropdownId }) => {
  return (
    <StyledMultiSelectDropdown
      $opened={opened}
      role='listbox'
      id={dropdownId}
      tabIndex={-1}
      onKeyDown={(e) => handleDropdownListKeyPress({ e, options, onClose })}
    >
      {options.map((item) => (
        <SelectOption key={item.id} value={item} onSelect={() => onSelect(item.id)} />
      ))}
    </StyledMultiSelectDropdown>
  );
};

export default MultiSelectDropdown;
