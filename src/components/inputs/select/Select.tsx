import { useRef, useState } from 'react';

import styles from './styles.module.css';
import { useClickOutside } from 'utils/use-click-outside';
import createClassName from 'utils/create-class-name';
import SelectCombobox from './SelectCombobox';
import SelectDropdown from './SelectDropdown';

export type ChopLogicSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  id: string;
  values: SelectValue[];
};

export type SelectValue = {
  id: string;
  label: string;
};

const ChopLogicSelect: React.FC<ChopLogicSelectProps> = ({ className, id, values }) => {
  const [isOpened, setIsOpened] = useState(false);
  const comboboxId = `${id}_combobox`;
  const dropdownId = `${id}_dropdown`;
  const wrapperClass = createClassName([styles.wrapper, className]);
  const ref = useRef(null);

  const handleClose = () => setIsOpened(false);

  const handleToggle = () => setIsOpened(!isOpened);

  useClickOutside({ ref, onClickOutsideHandler: handleClose });

  return (
    <div className={wrapperClass} ref={ref}>
      <SelectCombobox isOpened={isOpened} comboboxId={comboboxId} dropdownId={dropdownId} onClick={handleToggle} />
      <SelectDropdown values={values} isOpened={isOpened} onClose={handleClose} dropdownId={dropdownId} />
    </div>
  );
};

export default ChopLogicSelect;
