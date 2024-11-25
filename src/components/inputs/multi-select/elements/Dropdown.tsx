import React from 'react';
import { handleDropdownListKeyPress } from 'utils/handle-dropdown-list-key-press.ts';

import { StyledSelectDropdown } from 'components/inputs/_common/styled/Select.styled.tsx';

import { MultiSelectDropdownProps } from '../types';

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
