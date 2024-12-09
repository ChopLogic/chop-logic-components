import React from 'react';

import { StyledSelectCombobox } from '@/elements/styled/Select.styled';
import ArrowDownIcon from '@/icons/ArrowDownIcon';
import ArrowUpIcon from '@/icons/ArrowUpIcon';
import { MultiSelectComboboxProps } from '@/types';

const SelectCombobox: React.FC<MultiSelectComboboxProps> = ({
  opened,
  onClick,
  comboboxId,
  dropdownId,
  name,
  placeholder,
  disabled,
  required,
  values,
  theme,
}) => {
  const selectedLabels = values?.filter((value) => value.selected).map((value) => value.label);
  const selectedIds = values?.filter((value) => value.selected).map((value) => value.id);
  let selectedValues = <span>{placeholder}</span>;

  if (selectedLabels && selectedLabels.length > 1) {
    selectedValues = <span>{`${selectedLabels.length} items selected`}</span>;
  } else if (selectedLabels && selectedLabels.length === 1) {
    selectedValues = <span>{selectedLabels[0]}</span>;
  }

  return (
    <StyledSelectCombobox
      type='button'
      name={name}
      value={selectedIds}
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
      {selectedValues}
      {opened ? <ArrowUpIcon /> : <ArrowDownIcon />}
    </StyledSelectCombobox>
  );
};

export default SelectCombobox;
