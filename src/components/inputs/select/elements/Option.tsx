import React, { KeyboardEvent } from 'react';

import { StyledSelectOption } from '@/elements/styled/Select.styled';
import CheckMarkIcon from '@/icons/CheckMarkIcon.tsx';
import { SelectOptionProps } from '@/types';

const SelectOption: React.FC<SelectOptionProps> = ({ value, selected, onSelect, onClear, theme }) => {
  const { id, label } = value;

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
    <StyledSelectOption
      id={id}
      role='option'
      aria-selected={selected}
      tabIndex={0}
      onKeyDown={handleKeyDown(id)}
      onClick={() => handleOptionSelect(id)}
      $theme={theme}
      $selected={selected}
    >
      <span>{label}</span>
      {selected && <CheckMarkIcon />}
    </StyledSelectOption>
  );
};

export default SelectOption;
