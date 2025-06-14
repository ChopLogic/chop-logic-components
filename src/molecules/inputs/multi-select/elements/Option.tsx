import React, { KeyboardEvent } from 'react';
import CheckboxCheckedIcon from '@assets/icons/svg/CheckboxCheckedIcon.tsx';
import CheckboxUncheckedIcon from '@assets/icons/svg/CheckboxUncheckedIcon.tsx';
import { ChopLogicMultiSelectValue } from '@models';
import { getClassName } from '@utils';
import styles from '@molecules/inputs/select/Select.module.scss';

type MultiSelectOptionProps = {
  value: ChopLogicMultiSelectValue;
  onSelect: (id: string) => void;
};

const SelectOption: React.FC<MultiSelectOptionProps> = ({ value, onSelect }) => {
  const { id, label, selected } = value;
  const optionClass = getClassName([styles.option, styles.option__multi, { [styles.option__selected]: selected }]);

  const handleKeyDown = (id: string) => (e: KeyboardEvent<HTMLLIElement>) => {
    switch (e.key) {
      case ' ':
      case 'SpaceBar':
      case 'Enter':
        e.preventDefault();
        onSelect(id);
        break;
      default:
        break;
    }
  };

  return (
    <li
      id={id}
      role='option'
      aria-selected={selected}
      tabIndex={0}
      onKeyDown={handleKeyDown(id)}
      onClick={() => onSelect(id)}
      className={optionClass}
    >
      {selected ? <CheckboxCheckedIcon /> : <CheckboxUncheckedIcon />}
      <span>{label}</span>
    </li>
  );
};

export default SelectOption;
