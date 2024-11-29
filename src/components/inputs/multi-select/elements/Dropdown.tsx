import React from 'react';

import { StyledSelectDropdown } from '@/elements/styled/Select.styled';
import { MultiSelectDropdownProps } from '@/types';
import { handleDropdownListKeyPress } from '@/utils';

import SelectOption from './Option';

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({ options, opened, onClose, onSelect, dropdownId }) => {
  return (
    <StyledSelectDropdown
      $opened={opened}
      role='listbox'
      id={dropdownId}
      tabIndex={-1}
      onKeyDown={(e) => handleDropdownListKeyPress({ e, options, onClose })}
    >
      {options.map((item) => (
        <SelectOption key={item.id} value={item} onSelect={() => onSelect(item.id)} />
      ))}
    </StyledSelectDropdown>
  );
};

export default MultiSelectDropdown;
