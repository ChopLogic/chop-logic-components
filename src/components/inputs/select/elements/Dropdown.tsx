import { KeyboardEvent } from 'react';
import createClassName from 'utils/create-class-name';
import { SelectValue } from '../Select';
import { moveFocusOnElementById } from 'utils/move-focus-on-element-by-id';
import SelectOption from './Option';
import '../Select.styles.css';

type SelectDropdownProps = {
  values: SelectValue[];
  isOpened: boolean;
  dropdownId: string;
  comboboxId: string;
  onClose: () => void;
  selected?: SelectValue;
  onSelect: (id: string) => void;
};

const SelectDropdown: React.FC<SelectDropdownProps> = ({ values, isOpened, onClose, onSelect, dropdownId, comboboxId, selected }) => {
  const dropdownClass = createClassName(['cl-select__dropdown', { 'cl-select__dropdown_opened': isOpened }]);

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
    <ul className={dropdownClass} role='listbox' id={dropdownId} tabIndex={-1} onKeyDown={handleListKeyDown}>
      {values.map((item) => (
        <SelectOption key={item.id} value={item} onSelect={() => handleOptionSelect(item.id)} isSelected={item.id === selected?.id} />
      ))}
    </ul>
  );
};

export default SelectDropdown;
