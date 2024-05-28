import { useRef, useState } from 'react';

import styles from './styles.module.css';
import { useClickOutside } from 'utils/use-click-outside';
import createClassName from 'utils/create-class-name';
import SelectCombobox from './elements/Combobox';
import SelectDropdown from './elements/Dropdown';
import ChopLogicLabel from '../label/Label';

export type ChopLogicSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  id: string;
  name: string;
  label: string;
  values: SelectValue[];
  onSelect?: (value?: SelectValue) => void;
  placeholder?: string;
};

export type SelectValue = {
  id: string;
  label: string;
};

const ChopLogicSelect: React.FC<ChopLogicSelectProps> = ({
  id,
  values,
  onSelect,
  name,
  label,
  required = false,
  placeholder = 'Not selected',
  ...props
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [selected, setSelected] = useState<SelectValue | undefined>();
  const comboboxId = `${id}_combobox`;
  const dropdownId = `${id}_dropdown`;
  const wrapperClass = createClassName([styles.wrapper, props?.className]);
  const ref = useRef(null);

  const handleClose = () => setIsOpened(false);

  const handleToggle = () => setIsOpened(!isOpened);

  const handleSelect = (id: string) => {
    const newValue = values.find((item) => item.id === id);
    setSelected(newValue);
    onSelect?.(newValue);
  };

  useClickOutside({ ref, onClickOutsideHandler: handleClose });

  return (
    <div className={wrapperClass} ref={ref}>
      <ChopLogicLabel label={label} required={required} inputId={comboboxId} className={styles.label} />
      <SelectCombobox
        name={name}
        isOpened={isOpened}
        comboboxId={comboboxId}
        dropdownId={dropdownId}
        onClick={handleToggle}
        selected={selected}
        placeholder={placeholder}
      />
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
