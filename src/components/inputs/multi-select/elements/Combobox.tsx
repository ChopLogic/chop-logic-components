import styles from '../styles.module.css';
import { Icon } from 'enums/icon';
import createClassName from 'utils/create-class-name';
import { MultiSelectValue } from '../MultiSelect';

type SelectComboboxProps = {
  isOpened: boolean;
  disabled: boolean;
  required: boolean;
  onClick: () => void;
  comboboxId: string;
  dropdownId: string;
  selected?: MultiSelectValue[];
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
  const iconClass = createClassName([styles.icon, { [Icon.CaretUp]: isOpened, [Icon.CaretDown]: !isOpened }]);

  return (
    <button
      type='button'
      name={name}
      // value={selected?.id}
      role='combobox'
      aria-haspopup='listbox'
      aria-label='Select one of the options'
      aria-expanded={isOpened}
      aria-controls={dropdownId}
      id={comboboxId}
      className={styles.combobox}
      onClick={onClick}
      disabled={disabled}
      aria-required={required}
    >
      <span className={styles.combobox_label}>{selected?.length ?? placeholder}</span>
      <span className={iconClass} aria-hidden='true'></span>
    </button>
  );
};

export default SelectCombobox;
