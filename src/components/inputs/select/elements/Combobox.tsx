import ArrowDownIcon from 'components/misc/icon/elements/ArrowDown';
import ArrowUpIcon from 'components/misc/icon/elements/ArrowUp';

import { SelectValue } from '../Select';
import { StyledSelectCombobox, StyledSelectPlaceholder } from '../Select.styled';

type SelectComboboxProps = {
  isOpened: boolean;
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
  isOpened,
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
      aria-expanded={isOpened}
      aria-controls={dropdownId}
      id={comboboxId}
      className='cl-select__combobox'
      onClick={onClick}
      disabled={disabled}
      aria-required={required}
    >
      <StyledSelectPlaceholder>{selected?.label ?? placeholder}</StyledSelectPlaceholder>
      {isOpened ? <ArrowUpIcon /> : <ArrowDownIcon />}
    </StyledSelectCombobox>
  );
};

export default SelectCombobox;
