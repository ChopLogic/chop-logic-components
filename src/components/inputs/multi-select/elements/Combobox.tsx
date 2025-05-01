import React from 'react';
import { StyledSelectCombobox } from '@css/common/Select.styled';
import ArrowDownIcon from '@assets/icons/svg/ArrowDownIcon.tsx';
import ArrowUpIcon from '@assets/icons/svg/ArrowUpIcon.tsx';
import { ChopLogicMultiSelectValue, ChopLogicTheme } from '@models';

type MultiSelectComboboxProps = {
  opened: boolean;
  disabled: boolean;
  required: boolean;
  onClick: () => void;
  comboboxId: string;
  dropdownId: string;
  values?: ChopLogicMultiSelectValue[];
  placeholder?: string;
  name: string;
  theme: ChopLogicTheme;
};

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
