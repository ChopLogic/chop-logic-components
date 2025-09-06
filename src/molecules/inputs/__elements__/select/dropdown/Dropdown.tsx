import { ChopLogicSelectValue } from '@models';
import { getClassName, handleDropdownListKeyPress, moveFocusOnElementById } from '@utils';
import { FC } from 'react';

import { SelectOption } from '../option/Option';
import styles from './Dropdown.module.scss';

type Props = {
  options: ChopLogicSelectValue[];
  opened: boolean;
  dropdownId: string;
  comboboxId: string;
  onClose: () => void;
  selected?: ChopLogicSelectValue;
  onSelect: (id: string) => void;
  onClear: () => void;
};

export const SelectDropdown: FC<Props> = ({ options, opened, onClose, onSelect, dropdownId, comboboxId, selected, onClear }) => {
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
