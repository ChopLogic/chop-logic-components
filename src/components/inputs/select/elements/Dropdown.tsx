import React from 'react';
import { ChopLogicSelectValue } from '@models';
import { getClassName, handleDropdownListKeyPress, moveFocusOnElementById } from '@utils';
import styles from '../Select.module.scss';
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
  const dropdownClass = getClassName([styles.dropdown, { [styles.dropdown__opened]: opened }]);

  return (
    <ul
      role='listbox'
      id={dropdownId}
      tabIndex={-1}
      onKeyDown={(e) => handleDropdownListKeyPress({ e, options, onClose })}
      className={dropdownClass}
    >
      {options.map((item) => (
        <SelectOption
          key={item.id}
          value={item}
          onSelect={() => handleOptionSelect(item.id)}
          onClear={onClear}
          selected={item.id === selected?.id}
        />
      ))}
    </ul>
  );
};

export default SelectDropdown;
