import ArrowDownIcon from 'components/misc/icon/elements/ArrowDown';
import ArrowUpIcon from 'components/misc/icon/elements/ArrowUp';

import { StyledMultiSelectCombobox, StyledMultiSelectLabel, StyledMultiSelectPlaceholder } from '../MultiSelect.styled';
import { MultiSelectValue } from '../types';

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
  let selectedValues = <StyledMultiSelectPlaceholder>{placeholder}</StyledMultiSelectPlaceholder>;

  if (selectedLabels && selectedLabels.length > 1) {
    selectedValues = <StyledMultiSelectLabel>{`${selectedLabels.length} items selected`}</StyledMultiSelectLabel>;
  } else if (selectedLabels && selectedLabels.length === 1) {
    selectedValues = <StyledMultiSelectLabel>{selectedLabels[0]}</StyledMultiSelectLabel>;
  }

  return (
    <StyledMultiSelectCombobox
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
    </StyledMultiSelectCombobox>
  );
};

export default SelectCombobox;
