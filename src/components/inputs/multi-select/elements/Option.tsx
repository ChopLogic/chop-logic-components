import { KeyboardEvent } from 'react';

import styles from '../styles.module.css';
import createClassName from 'utils/create-class-name';
import { Icon } from 'enums/icon';
import { MultiSelectValue } from '../MultiSelect';

type SelectOptionProps = {
  value: MultiSelectValue;
  onSelect: (id: string) => void;
};

const SelectOption: React.FC<SelectOptionProps> = ({ value, onSelect }) => {
  const { id, label } = value;
  const iconClass = createClassName([styles.icon, Icon.CheckMark]);

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
      className={styles.option}
      aria-selected={value.selected}
      tabIndex={0}
      onKeyDown={handleKeyDown(id)}
      onClick={() => onSelect(id)}
    >
      <span>{label}</span>
      {value.selected && <span className={iconClass} aria-hidden='true'></span>}
    </li>
  );
};

export default SelectOption;
