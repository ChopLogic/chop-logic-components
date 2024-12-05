import React from 'react';

import { StyledSelectDropdown } from '@/elements/styled/Select.styled';
import { SelectDropdownProps } from '@/types';
import { handleDropdownListKeyPress, moveFocusOnElementById } from '@/utils';

import SelectOption from './Option';

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
          isSelected={item.id === selected?.id}
          theme={theme}
        />
      ))}
    </StyledSelectDropdown>
  );
};

export default SelectDropdown;
