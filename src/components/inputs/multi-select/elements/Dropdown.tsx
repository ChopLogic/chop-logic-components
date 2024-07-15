import { KeyboardEvent } from 'react';
import createClassName from 'utils/create-class-name';
import { moveFocusOnElementById } from 'utils/move-focus-on-element-by-id';
import SelectOption from './Option';
import '../MultiSelect.styles.css';
import { MultiSelectDropdownProps } from '../types';

const SelectDropdown: React.FC<MultiSelectDropdownProps> = ({ values, isOpened, onClose, onSelect, dropdownId }) => {
  const dropdownClass = createClassName(['cl-multi-select__dropdown', { 'cl-multi-select__dropdown_opened': isOpened }]);

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
        <SelectOption key={item.id} value={item} onSelect={() => onSelect(item.id)} />
      ))}
    </ul>
  );
};

export default SelectDropdown;
