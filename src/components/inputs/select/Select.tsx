import { useRef, useState } from 'react';
import { useClickOutside } from 'hooks/use-click-outside';
import createClassName from 'utils/create-class-name';
import SelectCombobox from './elements/Combobox';
import SelectDropdown from './elements/Dropdown';
import ChopLogicLabel from '../../elements/label/Label';
import { useKeyPress } from 'hooks/use-key-press';
import './Select.styles.css';

export type ChopLogicSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  id: string;
  name: string;
  label: string;
  values: SelectValue[];
  onSelectChange?: (value?: SelectValue) => void;
  placeholder?: string;
};

export type SelectValue = {
  id: string;
  label: string;
};

const ChopLogicSelect: React.FC<ChopLogicSelectProps> = ({
  id,
  values,
  onSelectChange,
  name,
  label,
  required = false,
  placeholder = 'Not selected',
  disabled = false,
  ...props
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [selected, setSelected] = useState<SelectValue | undefined>();
  const comboboxId = `${id}_combobox`;
  const dropdownId = `${id}_dropdown`;
  const wrapperClass = createClassName(['cl-select', props?.className, { 'cl-select_disabled': disabled }]);
  const ref = useRef<HTMLDivElement>(null);

  const handleClose = () => setIsOpened(false);

  const handleToggle = () => setIsOpened(!isOpened);

  const handleSelect = (id: string) => {
    const newValue = values.find((item) => item.id === id);
    setSelected(newValue);
    onSelectChange?.(newValue);
  };

  useClickOutside({ ref, onClickOutsideHandler: handleClose });
  useKeyPress({ keyCode: 'Escape', ref, onKeyPress: handleClose });

  return (
    <div className={wrapperClass} ref={ref}>
      <ChopLogicLabel label={label} required={required} inputId={comboboxId} className='cl-select__label' />
      <SelectCombobox
        name={name}
        isOpened={isOpened}
        comboboxId={comboboxId}
        dropdownId={dropdownId}
        onClick={handleToggle}
        selected={selected}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
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
