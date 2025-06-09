import React from 'react';
import { ChopLogicMultiSelectValue } from '@models';
import { getClassName, handleDropdownListKeyPress } from '@utils';
import styles from '../../select/Select.module.scss';
import SelectOption from './Option.tsx';

type MultiSelectDropdownProps = {
  options: ChopLogicMultiSelectValue[];
  opened: boolean;
  dropdownId: string;
  onClose: () => void;
  onSelect: (id: string) => void;
};

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({ options, opened, onClose, onSelect, dropdownId }) => {
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
        <SelectOption key={item.id} value={item} onSelect={() => onSelect(item.id)} />
      ))}
    </ul>
  );
};

export default MultiSelectDropdown;
