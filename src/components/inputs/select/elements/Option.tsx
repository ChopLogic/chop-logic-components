import React, { KeyboardEvent } from 'react';
import CheckMarkIcon from '@assets/icons/svg/CheckMarkIcon.tsx';
import { ChopLogicSelectValue } from '@models';
import styles from '../Select.module.scss';
import { getClassName } from '@utils';

type SelectOptionProps = {
  value: ChopLogicSelectValue;
  selected: boolean;
  onSelect: (id: string) => void;
  onClear: () => void;
};

const SelectOption: React.FC<SelectOptionProps> = ({ value, selected, onSelect, onClear }) => {
  const { id, label } = value;
  const optionClass = getClassName([styles.option, { [styles.option__selected]: selected }]);

  const handleOptionSelect = (id: string) => {
    if (selected) {
      onClear();
    } else {
      onSelect(id);
    }
  };

  const handleKeyDown = (id: string) => (e: KeyboardEvent<HTMLLIElement>) => {
    switch (e.key) {
      case ' ':
      case 'SpaceBar':
      case 'Enter':
        e.preventDefault();
        handleOptionSelect(id);
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
      onClick={() => handleOptionSelect(id)}
      className={optionClass}
    >
      <span>{label}</span>
      {selected && <CheckMarkIcon />}
    </li>
  );
};

export default SelectOption;
