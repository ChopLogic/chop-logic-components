import { KeyboardEvent } from 'react';

import styles from '../styles.module.css';
import { SelectValue } from '../Select';
import createClassName from 'utils/create-class-name';
import { UTF_ICONS } from 'assets/icons/utf-icons';

type SelectOptionProps = {
  value: SelectValue;
  isSelected: boolean;
  onSelect: (id: string) => void;
};

const SelectOption: React.FC<SelectOptionProps> = ({ value, isSelected, onSelect }) => {
  const { id, label } = value;
  const optionClass = createClassName([styles.option]);

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
      className={optionClass}
      aria-selected={isSelected}
      tabIndex={0}
      onKeyDown={handleKeyDown(id)}
      onClick={() => onSelect(id)}
    >
      <span>{label}</span>
      {isSelected && <span>{UTF_ICONS['CheckMark']}</span>}
    </li>
  );
};

export default SelectOption;
