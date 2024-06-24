import { useRef, useState } from 'react';
import 'assets/common.module.css';
import styles from './styles.module.css';
import createClassName from 'utils/create-class-name';
import SelectCombobox from './elements/Combobox';
import SelectDropdown from './elements/Dropdown';
import ChopLogicLabel from '../../elements/label/Label';
import { useClickOutside } from 'hooks/use-click-outside';
import { useKeyPress } from 'hooks/use-key-press';

export type ChopLogicMultiSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  id: string;
  name: string;
  label: string;
  values: MultiSelectValue[];
  onSelectChange?: (values?: MultiSelectValue[]) => void;
  placeholder?: string;
};

export type MultiSelectValue = {
  id: string;
  label: string;
  selected: boolean;
};

const ChopLogicMultiSelect: React.FC<ChopLogicMultiSelectProps> = ({
  id,
  values,
  name,
  label,
  required = false,
  placeholder = 'Not selected',
  disabled = false,
  onSelectChange,
  ...props
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedValues, setSelectedValues] = useState<MultiSelectValue[]>(values);
  const comboboxId = `${id}_combobox`;
  const dropdownId = `${id}_dropdown`;
  const wrapperClass = createClassName([styles.wrapper, props?.className, { [styles.disabled]: disabled }]);
  const ref = useRef(null);

  const handleClose = () => setIsOpened(false);

  const handleToggle = () => setIsOpened(!isOpened);

  const handleSelect = (id: string) => {
    const targetItem = selectedValues.find((item) => item.id === id);

    const newValues = selectedValues.map((item) => {
      return item.id === id ? { ...item, selected: !targetItem?.selected } : item;
    });
    setSelectedValues(newValues);
    onSelectChange?.(newValues);
  };

  useClickOutside({ ref, onClickOutsideHandler: handleClose });
  useKeyPress({ keyCode: 'Escape', ref, onKeyPress: handleClose });

  return (
    <div className={wrapperClass} ref={ref}>
      <ChopLogicLabel label={label} required={required} inputId={comboboxId} className={styles.label} />
      <SelectCombobox
        name={name}
        isOpened={isOpened}
        comboboxId={comboboxId}
        dropdownId={dropdownId}
        onClick={handleToggle}
        values={selectedValues}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
      />
      <SelectDropdown values={selectedValues} isOpened={isOpened} onClose={handleClose} dropdownId={dropdownId} onSelect={handleSelect} />
    </div>
  );
};

export default ChopLogicMultiSelect;
