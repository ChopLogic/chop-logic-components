import { KeyboardEvent } from 'react';

import styles from './styles.module.css';
import createClassName from 'utils/create-class-name';

type SelectDropdownProps = {
  values: { id: string; label: string }[];
  isOpened: boolean;
  dropdownId: string;
  onClose: () => void;
  selectedId?: string;
};

const SelectDropdown: React.FC<SelectDropdownProps> = ({ values, isOpened, onClose, dropdownId }) => {
  const dropdownClass = createClassName([styles.dropdown, { [styles.closed]: !isOpened }]);

  //   const selectAndClose = (id: string) => {
  //     const patient = patients.find((patient) => patient.id === id);
  //     if (patient && setSelectedPatient) setSelectedPatient?.(patient);
  //     onClose();
  //     moveFocusOnElementById(PROFILE_SELECTOR_COMBOBOX_ID);
  //   };

  const handleListKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
    // let focusedId: string = '';
    // patients.forEach((patient) => {
    //   const element = document.getElementById(patient.id);
    //   if (element === document.activeElement) {
    //     focusedId = patient.id;
    //   }
    // });

    // const currentFocusIndex = patients.findIndex((patient) => patient.id === focusedId);

    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        onClose();
        break;
      case 'ArrowUp': {
        e.preventDefault();
        // const previousOptionIndex = currentFocusIndex - 1 >= 0 ? currentFocusIndex - 1 : patients.length - 1;
        // const previousPatient = patients[previousOptionIndex];
        // if (previousPatient) moveFocusOnElementById(previousPatient.id);
        break;
      }
      case 'ArrowDown':
      case 'Tab': {
        e.preventDefault();
        // const nextOptionIndex = currentFocusIndex === patients.length - 1 ? 0 : currentFocusIndex + 1;
        // const nextPatient = patients[nextOptionIndex];
        // if (nextPatient) moveFocusOnElementById(nextPatient.id);
        break;
      }
      default:
        break;
    }
  };

  return (
    <ul className={dropdownClass} role='listbox' id={dropdownId} tabIndex={-1} onKeyDown={handleListKeyDown}>
      {values.map((item) => (
        <option key={item.id}>{item.label}</option>
      ))}
    </ul>
  );
};

export default SelectDropdown;
