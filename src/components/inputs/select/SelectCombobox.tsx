import createClassName from 'utils/create-class-name';
import styles from './styles.module.css';
import { SelectValue } from './Select';

export const PROFILE_SELECTOR_DROPDOWN_ID = 'profile-selector-dropdown';
export const PROFILE_SELECTOR_COMBOBOX_ID = 'profile-selector-combobox';

type SelectComboboxProps = {
  isOpened: boolean;
  onClick: () => void;
  comboboxId: string;
  dropdownId: string;
  selected?: SelectValue;
};

const SelectCombobox: React.FC<SelectComboboxProps> = ({ isOpened, onClick, comboboxId, dropdownId, selected }) => {
  const comboboxClass = createClassName([styles.combobox, { [styles.opened]: isOpened }]);

  return (
    <button
      role='combobox'
      aria-haspopup='listbox'
      aria-label='Select one of the options'
      aria-expanded={isOpened}
      aria-controls={dropdownId}
      id={comboboxId}
      className={comboboxClass}
      onClick={onClick}
    >
      {selected?.label ?? 'Click to select'}
    </button>
  );
};

export default SelectCombobox;
