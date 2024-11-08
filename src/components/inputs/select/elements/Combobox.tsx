import React from 'react';

import ArrowDownIcon from 'components/misc/icon/elements/ArrowDown';
import ArrowUpIcon from 'components/misc/icon/elements/ArrowUp';

import { StyledSelectCombobox, StyledSelectLabel, StyledSelectPlaceholder } from '../Select.styled';
import { SelectValue } from '../types';

type SelectComboboxProps = {
  opened: boolean;
  disabled: boolean;
  required: boolean;
  onClick: () => void;
  comboboxId: string;
  dropdownId: string;
  selected?: SelectValue;
  placeholder?: string;
  name: string;
};

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
    >
      {selected?.label ? (
        <StyledSelectLabel>{selected?.label}</StyledSelectLabel>
      ) : (
        <StyledSelectPlaceholder>{placeholder}</StyledSelectPlaceholder>
      )}
      {opened ? <ArrowUpIcon /> : <ArrowDownIcon />}
    </StyledSelectCombobox>
  );
};

export default SelectCombobox;
