import React, { KeyboardEvent } from 'react';

import { StyledMultiSelectOption } from 'components/inputs/_common/styled/Select.styled.tsx';
import CheckboxCheckedIcon from 'components/misc/icon/elements/CheckboxChecked';
import CheckboxUncheckedIcon from 'components/misc/icon/elements/CheckboxUnchecked';

import { MultiSelectValue } from '../types';

type SelectOptionProps = {
  value: MultiSelectValue;
  onSelect: (id: string) => void;
};

const SelectOption: React.FC<SelectOptionProps> = ({ value, onSelect }) => {
  const { id, label, selected } = value;

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
    <StyledMultiSelectOption
      id={id}
      role='option'
      aria-selected={selected}
      tabIndex={0}
      onKeyDown={handleKeyDown(id)}
      onClick={() => onSelect(id)}
    >
      {selected ? <CheckboxCheckedIcon /> : <CheckboxUncheckedIcon />}
      <span>{label}</span>
    </StyledMultiSelectOption>
  );
};

export default SelectOption;
