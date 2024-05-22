import createClassName from 'utils/create-class-name';
import styles from './styles.module.css';

export const PROFILE_SELECTOR_DROPDOWN_ID = 'profile-selector-dropdown';
export const PROFILE_SELECTOR_COMBOBOX_ID = 'profile-selector-combobox';

type SelectComboboxProps = {
  isOpened: boolean;
  onClick: () => void;
  comboboxId: string;
  dropdownId: string;
};

const SelectCombobox: React.FC<SelectComboboxProps> = ({ isOpened, onClick, comboboxId, dropdownId }) => {
  const comboboxClass = createClassName([styles.combobox]);

  return (
    <button
      role='combobox'
      aria-haspopup='listbox'
      aria-label='Select your patient profile'
      aria-expanded={isOpened}
      aria-controls={dropdownId}
      id={comboboxId}
      className={comboboxClass}
      onClick={onClick}
    >
      Select button
    </button>
  );
};

export default SelectCombobox;
