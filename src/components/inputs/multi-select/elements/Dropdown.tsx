import React from 'react';
import { StyledSelectDropdown } from '@elements/styled/Select.styled';
import { ChopLogicMultiSelectValue, ChopLogicTheme } from '@models';
import { handleDropdownListKeyPress } from '@utils';

import SelectOption from './Option';

type MultiSelectDropdownProps = {
  options: ChopLogicMultiSelectValue[];
  opened: boolean;
  dropdownId: string;
  onClose: () => void;
  onSelect: (id: string) => void;
  theme: ChopLogicTheme;
};

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({ options, opened, onClose, onSelect, dropdownId, theme }) => {
  return (
    <StyledSelectDropdown
      $opened={opened}
      role='listbox'
      id={dropdownId}
      tabIndex={-1}
      onKeyDown={(e) => handleDropdownListKeyPress({ e, options, onClose })}
      $theme={theme}
    >
      {options.map((item) => (
        <SelectOption key={item.id} value={item} onSelect={() => onSelect(item.id)} theme={theme} />
      ))}
    </StyledSelectDropdown>
  );
};

export default MultiSelectDropdown;
