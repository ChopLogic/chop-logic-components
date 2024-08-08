import ArrowDownIcon from 'assets/icons/ArrowDown';
import ArrowUpIcon from 'assets/icons/ArrowUp';

import { StyledMultiSelectCombobox, StyledMultiSelectPlaceholder } from '../MultiSelect.styled';
import { MultiSelectValue } from '../types';

type SelectComboboxProps = {
  isOpened: boolean;
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
  isOpened,
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
  let visiblePlaceholder = placeholder;

  if (selectedLabels && selectedLabels.length > 1) {
    visiblePlaceholder = `${selectedLabels.length} items selected`;
  } else if (selectedLabels && selectedLabels.length === 1) {
    visiblePlaceholder = selectedLabels[0];
  }

  return (
    <StyledMultiSelectCombobox
      type='button'
      name={name}
      value={selectedIds}
      role='combobox'
      aria-haspopup='listbox'
      aria-expanded={isOpened}
      aria-controls={dropdownId}
      id={comboboxId}
      onClick={onClick}
      disabled={disabled}
      aria-required={required}
    >
      <StyledMultiSelectPlaceholder>{visiblePlaceholder}</StyledMultiSelectPlaceholder>
      {isOpened ? <ArrowUpIcon /> : <ArrowDownIcon />}
    </StyledMultiSelectCombobox>
  );
};

export default SelectCombobox;
