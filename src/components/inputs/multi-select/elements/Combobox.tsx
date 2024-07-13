import { Icon } from 'enums/icon';
import createClassName from 'utils/create-class-name';
import { MultiSelectValue } from '../MultiSelect';
import '../MultiSelect.styles.css';

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
  const iconClass = createClassName(['cl-multi-select__icon', { [Icon.CaretUp]: isOpened, [Icon.CaretDown]: !isOpened }]);
  const selectedLabels = values?.filter((value) => value.selected).map((value) => value.label);
  const selectedIds = values?.filter((value) => value.selected).map((value) => value.id);
  let visiblePlaceholder = placeholder;

  if (selectedLabels && selectedLabels.length > 1) {
    visiblePlaceholder = `${selectedLabels.length} items selected`;
  } else if (selectedLabels && selectedLabels.length === 1) {
    visiblePlaceholder = selectedLabels[0];
  }

  return (
    <button
      type='button'
      name={name}
      value={selectedIds}
      role='combobox'
      aria-haspopup='listbox'
      aria-expanded={isOpened}
      aria-controls={dropdownId}
      id={comboboxId}
      className='cl-multi-select__combobox'
      onClick={onClick}
      disabled={disabled}
      aria-required={required}
    >
      <span className='cl-multi-select__placeholder'>{visiblePlaceholder}</span>
      <span className={iconClass} aria-hidden='true'></span>
    </button>
  );
};

export default SelectCombobox;
