import { KeyboardEvent } from 'react';
import { moveFocusOnElementById } from 'utils/move-focus-on-element-by-id';

import { SelectValue } from '../Select';
import { StyledSelectDropdown } from '../Select.styled';

import SelectOption from './Option';

type SelectDropdownProps = {
  values: SelectValue[];
  isOpened: boolean;
  dropdownId: string;
  comboboxId: string;
  onClose: () => void;
  selected?: SelectValue;
  onSelect: (id: string) => void;
  onClear: () => void;
};

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  values,
  isOpened,
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

  const handleListKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
    let focusedId: string = '';
    values.forEach((value) => {
      const element = document.getElementById(value.id);
      if (element === document.activeElement) {
        focusedId = value.id;
      }
    });

    const currentFocusIndex = values.findIndex((value) => value.id === focusedId);

    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        onClose();
        break;
      case 'ArrowUp': {
        e.preventDefault();
        const previousOptionIndex = currentFocusIndex - 1 >= 0 ? currentFocusIndex - 1 : values.length - 1;
        const previousValue = values[previousOptionIndex];
        if (previousValue) moveFocusOnElementById(previousValue.id);
        break;
      }
      case 'ArrowDown':
      case 'Tab': {
        e.preventDefault();
        const nextOptionIndex = currentFocusIndex === values.length - 1 ? 0 : currentFocusIndex + 1;
        const nextValue = values[nextOptionIndex];
        if (nextValue) moveFocusOnElementById(nextValue.id);
        break;
      }
      default:
        break;
    }
  };

  return (
    <StyledSelectDropdown role='listbox' id={dropdownId} tabIndex={-1} onKeyDown={handleListKeyDown} $opened={isOpened}>
      {values.map((item) => (
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
