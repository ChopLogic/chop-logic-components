import React from 'react';

import { StyledSelectCombobox } from '@/elements/styled/Select.styled';
import ArrowDownIcon from '@/icons/ArrowDownIcon.tsx';
import ArrowUpIcon from '@/icons/ArrowUpIcon.tsx';
import { ChopLogicSelectValue, ChopLogicTheme } from '@/models';

type SelectComboboxProps = {
  opened: boolean;
  disabled: boolean;
  required: boolean;
  onClick: () => void;
  comboboxId: string;
  dropdownId: string;
  selected?: ChopLogicSelectValue;
  placeholder?: string;
  name: string;
  theme: ChopLogicTheme;
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
