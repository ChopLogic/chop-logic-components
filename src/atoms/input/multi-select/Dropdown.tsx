import { ChopLogicMultiSelectValue } from '@models';
import { getClassName, handleDropdownListKeyPress } from '@utils';
import React from 'react';

import styles from '../select/dropdown/Dropdown.module.scss';
import { MultiSelectOption } from './Option';

type Props = {
  options: ChopLogicMultiSelectValue[];
  opened: boolean;
  dropdownId: string;
  onClose: () => void;
  onSelect: (id: string) => void;
};

export const MultiSelectDropdown: React.FC<Props> = ({ options, opened, onClose, onSelect, dropdownId }) => {
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
        <MultiSelectOption key={item.id} value={item} onSelect={() => onSelect(item.id)} />
      ))}
    </ul>
  );
};
