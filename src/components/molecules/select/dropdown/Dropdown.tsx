import type { SelectValue } from '@types';
import { getClassName, handleDropdownListKeyPress, moveFocusOnElementById } from '@utils';
import type { FC } from 'react';

import './Dropdown.css';
import { SelectOption } from '../option/Option';

type Props = {
  options: SelectValue[];
  opened: boolean;
  dropdownId: string;
  comboboxId: string;
  onClose: () => void;
  selected?: SelectValue;
  onSelect: (id: string) => void;
  onClear: () => void;
};

export const SelectDropdown: FC<Props> = ({
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
  const dropdownClass = getClassName([
    'cl-select-dropdown',
    { 'cl-select-dropdown_opened': opened },
  ]);

  return (
    <ul
      role="listbox"
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
