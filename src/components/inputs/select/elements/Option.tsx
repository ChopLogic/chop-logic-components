import React, { KeyboardEvent } from 'react';

import { StyledSelectOption } from '@/elements/styled/Select.styled';
import CheckMarkIcon from '@/icons/CheckMarkIcon.tsx';
import { SelectOptionProps } from '@/types';

const SelectOption: React.FC<SelectOptionProps> = ({ value, isSelected, onSelect, onClear, theme }) => {
  const { id, label } = value;

  const handleOptionSelect = (id: string) => {
    if (isSelected) {
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
    <StyledSelectOption
      id={id}
      role='option'
      aria-selected={isSelected}
      tabIndex={0}
      onKeyDown={handleKeyDown(id)}
      onClick={() => handleOptionSelect(id)}
      $theme={theme}
    >
      <span>{label}</span>
      {isSelected && <CheckMarkIcon />}
    </StyledSelectOption>
  );
};

export default SelectOption;
