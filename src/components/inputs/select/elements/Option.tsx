import { KeyboardEvent } from 'react';
import { SelectValue } from '../Select';
import createClassName from 'utils/create-class-name';
import { Icon } from 'enums/icon';
import '../Select.styles.css';

type SelectOptionProps = {
  value: SelectValue;
  isSelected: boolean;
  onSelect: (id: string) => void;
};

const SelectOption: React.FC<SelectOptionProps> = ({ value, isSelected, onSelect }) => {
  const { id, label } = value;
  const iconClass = createClassName(['cl-select__icon', Icon.CheckMark]);

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
      className='cl-select__option'
      aria-selected={isSelected}
      tabIndex={0}
      onKeyDown={handleKeyDown(id)}
      onClick={() => onSelect(id)}
    >
      <span>{label}</span>
      {isSelected && <span className={iconClass} aria-hidden='true'></span>}
    </li>
  );
};

export default SelectOption;
