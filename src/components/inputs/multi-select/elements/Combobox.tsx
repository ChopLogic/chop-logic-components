import React from 'react';

import { StyledSelectCombobox } from '@/elements/styled/Select.styled';
import ArrowDownIcon from '@/icons/ArrowDownIcon';
import ArrowUpIcon from '@/icons/ArrowUpIcon';
import { MultiSelectValue } from '@/types';

type SelectComboboxProps = {
  opened: boolean;
  disabled: boolean;
  required: boolean;
  onClick: () => void;
  comboboxId: string;
  dropdownId: string;
  values?: MultiSelectValue[];
  placeholder?: string;
  name: string;
};

const SelectCombobox: React.FC<SelectComboboxProps> = ({
  opened,
  onClick,
  comboboxId,
  dropdownId,
  name,
  placeholder,
  disabled,
  required,
  values,
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
    >
      {selectedValues}
      {opened ? <ArrowUpIcon /> : <ArrowDownIcon />}
    </StyledSelectCombobox>
  );
};

export default SelectCombobox;
