import React from 'react';
import { handleDropdownListKeyPress } from 'utils/handle-dropdown-list-key-press.ts';
import { moveFocusOnElementById } from 'utils/move-focus-on-element-by-id';
import { SelectValue } from 'utils/types.ts';

import { StyledSelectDropdown } from 'components/inputs/_common/styled/Select.styled.tsx';

import SelectOption from './Option';

type SelectDropdownProps = {
  options: SelectValue[];
  opened: boolean;
  dropdownId: string;
  comboboxId: string;
  onClose: () => void;
  selected?: SelectValue;
  onSelect: (id: string) => void;
  onClear: () => void;
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
    >
      {options.map((item) => (
        <SelectOption
          key={item.id}
          value={item}
          onSelect={() => handleOptionSelect(item.id)}
          onClear={onClear}
          isSelected={item.id === selected?.id}
        />
      ))}
    </StyledSelectDropdown>
  );
};

export default SelectDropdown;
