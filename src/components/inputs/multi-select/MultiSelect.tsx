import { useRef, useState } from 'react';
import createClassName from 'utils/create-class-name';
import SelectCombobox from './elements/Combobox';
import SelectDropdown from './elements/Dropdown';
import ChopLogicLabel from '../../elements/label/Label';
import { useClickOutside } from 'hooks/use-click-outside';
import { useKeyPress } from 'hooks/use-key-press';
import './MultiSelect.scss';
import { ChopLogicMultiSelectProps, MultiSelectValue } from './types';

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
  const wrapperClass = createClassName(['cl-multi-select', props?.className, { 'cl-multi-select_disabled': disabled }]);
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
      <ChopLogicLabel label={label} required={required} inputId={comboboxId} className='cl-multi-select__label' />
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
