import React from 'react';

import { StyledSelectDropdown } from '@/elements/styled/Select.styled';
import { ChopLogicSelectValue, ChopLogicTheme } from '@/models';
import { handleDropdownListKeyPress, moveFocusOnElementById } from '@/utils';

import SelectOption from './Option';

type SelectDropdownProps = {
  options: ChopLogicSelectValue[];
  opened: boolean;
  dropdownId: string;
  comboboxId: string;
  onClose: () => void;
  selected?: ChopLogicSelectValue;
  onSelect: (id: string) => void;
  onClear: () => void;
  theme: ChopLogicTheme;
};

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  options,
  opened,
  onClose,
  onSelect,
  dropdownId,
  comboboxId,
  selected,
  onClear,
  theme,
}) => {
  const handleOptionSelect = (id: string) => {
    onSelect(id);
    onClose();
    moveFocusOnElementById(comboboxId);
  };

  return (
    <StyledSelectDropdown
      role='listbox'
      id={dropdownId}
      tabIndex={-1}
      onKeyDown={(e) => handleDropdownListKeyPress({ e, options, onClose })}
      $opened={opened}
      $theme={theme}
    >
      {options.map((item) => (
        <SelectOption
          key={item.id}
          value={item}
          onSelect={() => handleOptionSelect(item.id)}
          onClear={onClear}
          selected={item.id === selected?.id}
          theme={theme}
        />
      ))}
    </StyledSelectDropdown>
  );
};

export default SelectDropdown;
