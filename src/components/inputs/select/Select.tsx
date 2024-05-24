import { useRef, useState } from 'react';

import styles from './styles.module.css';
import { useClickOutside } from 'utils/use-click-outside';
import createClassName from 'utils/create-class-name';
import SelectCombobox from './SelectCombobox';
import SelectDropdown from './SelectDropdown';

export type ChopLogicSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  id: string;
  values: SelectValue[];
  onSelect?: (value?: SelectValue) => void;
};

export type SelectValue = {
  id: string;
  label: string;
};

const ChopLogicSelect: React.FC<ChopLogicSelectProps> = ({ className, id, values, onSelect }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [selected, setSelected] = useState<SelectValue | undefined>();
  const comboboxId = `${id}_combobox`;
  const dropdownId = `${id}_dropdown`;
  const wrapperClass = createClassName([styles.wrapper, className]);
  const ref = useRef(null);

  const handleClose = () => setIsOpened(false);

  const handleToggle = () => setIsOpened(!isOpened);

  const handleSelect = (id: string) => {
    const newValue = values.find((item) => item.id === id);
    console.log('newValue', newValue);
    setSelected(newValue);
    onSelect?.(newValue);
  };

  useClickOutside({ ref, onClickOutsideHandler: handleClose });

  return (
    <div className={wrapperClass} ref={ref}>
      <SelectCombobox isOpened={isOpened} comboboxId={comboboxId} dropdownId={dropdownId} onClick={handleToggle} selected={selected} />
      <SelectDropdown
        values={values}
        selected={selected}
        isOpened={isOpened}
        onClose={handleClose}
        dropdownId={dropdownId}
        comboboxId={comboboxId}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default ChopLogicSelect;
