import styles from '../styles.module.css';
import { SelectValue } from '../Select';
import { UTF_ICONS } from 'assets/icons/utf-icons';

type SelectComboboxProps = {
  isOpened: boolean;
  onClick: () => void;
  comboboxId: string;
  dropdownId: string;
  selected?: SelectValue;
  placeholder?: string;
  name: string;
};

const SelectCombobox: React.FC<SelectComboboxProps> = ({ isOpened, onClick, comboboxId, dropdownId, selected, name, placeholder }) => {
  return (
    <button
      type='button'
      name={name}
      value={selected?.id}
      role='combobox'
      aria-haspopup='listbox'
      aria-label='Select one of the options'
      aria-expanded={isOpened}
      aria-controls={dropdownId}
      id={comboboxId}
      className={styles.combobox}
      onClick={onClick}
    >
      <span>{selected?.label ?? placeholder}</span>
      <span>{isOpened ? UTF_ICONS['Upwards'] : UTF_ICONS['Downwards']}</span>
    </button>
  );
};

export default SelectCombobox;
