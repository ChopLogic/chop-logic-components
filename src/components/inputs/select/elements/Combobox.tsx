import React from 'react';

import { StyledSelectCombobox } from '@/elements/styled/Select.styled';
import ArrowDownIcon from '@/icons/ArrowDownIcon.tsx';
import ArrowUpIcon from '@/icons/ArrowUpIcon.tsx';
import { SelectComboboxProps } from '@/types';

const SelectCombobox: React.FC<SelectComboboxProps> = ({
  opened,
  onClick,
  comboboxId,
  dropdownId,
  selected,
  name,
  placeholder,
  disabled,
  required,
  theme,
}) => {
  return (
    <StyledSelectCombobox
      type='button'
      name={name}
      value={selected?.id}
      role='combobox'
      aria-haspopup='listbox'
      aria-expanded={opened}
      aria-controls={dropdownId}
      id={comboboxId}
      onClick={onClick}
      disabled={disabled}
      aria-required={required}
      $theme={theme}
    >
      {selected?.label ? <span>{selected?.label}</span> : <span>{placeholder}</span>}
      {opened ? <ArrowUpIcon /> : <ArrowDownIcon />}
    </StyledSelectCombobox>
  );
};

export default SelectCombobox;
