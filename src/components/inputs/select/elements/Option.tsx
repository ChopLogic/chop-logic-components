import { KeyboardEvent } from 'react';

import CheckMarkIcon from 'components/misc/icon/elements/CheckMark';

import { SelectValue } from '../Select';
import { StyledSelectOption } from '../Select.styled';

type SelectOptionProps = {
  value: SelectValue;
  isSelected: boolean;
  onSelect: (id: string) => void;
};

const SelectOption: React.FC<SelectOptionProps> = ({ value, isSelected, onSelect }) => {
  const { id, label } = value;

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
    <StyledSelectOption
      id={id}
      role='option'
      className='cl-select__option'
      aria-selected={isSelected}
      tabIndex={0}
      onKeyDown={handleKeyDown(id)}
      onClick={() => onSelect(id)}
    >
      <span>{label}</span>
      {isSelected && <CheckMarkIcon />}
    </StyledSelectOption>
  );
};

export default SelectOption;
