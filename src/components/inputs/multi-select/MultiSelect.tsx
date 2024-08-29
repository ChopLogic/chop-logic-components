import { useContext, useRef, useState } from 'react';
import { useClickOutside } from 'hooks/use-click-outside';
import { useKeyPress } from 'hooks/use-key-press';

import { ChopLogicFormContext } from 'components/containers/form/FormContext';
import ChopLogicLabel from 'components/misc/label/Label';

import { SelectValue } from '../select/Select';

import SelectCombobox from './elements/Combobox';
import SelectDropdown from './elements/Dropdown';
import { StyledMultiSelectWrapper } from './MultiSelect.styled';

export type MultiSelectValue = SelectValue & { selected: boolean };

export type ChopLogicMultiSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  id: string;
  name: string;
  label: string;
  options: SelectValue[];
  onChange?: (values?: SelectValue[]) => void;
  placeholder?: string;
};

export type MultiSelectDropdownProps = {
  options: MultiSelectValue[];
  isOpened: boolean;
  dropdownId: string;
  onClose: () => void;
  onSelect: (id: string) => void;
};

const ChopLogicMultiSelect: React.FC<ChopLogicMultiSelectProps> = ({
  id,
  options,
  name,
  label,
  required = false,
  placeholder = 'Not selected',
  disabled = false,
  onChange,
  ...props
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [values, setValues] = useState<MultiSelectValue[]>(options.map((item) => ({ ...item, selected: false })));
  const { onChangeFormInput } = useContext(ChopLogicFormContext);
  const comboboxId = `${id}_combobox`;
  const dropdownId = `${id}_dropdown`;
  const ref = useRef(null);

  const handleClose = () => setIsOpened(false);

  const handleToggle = () => setIsOpened(!isOpened);

  const handleSelect = (id: string) => {
    const targetItem = values.find((item) => item.id === id);
    const newValues = values.map((item) => {
      return item.id === id ? { ...item, selected: !targetItem?.selected } : item;
    });
    const formValues: SelectValue[] = newValues.filter((item) => item.selected);

    setValues(newValues);
    onChange?.(newValues);
    onChangeFormInput?.({ name, value: formValues });
  };

  useClickOutside({ ref, onClickOutsideHandler: handleClose });
  useKeyPress({ keyCode: 'Escape', ref, onKeyPress: handleClose });

  return (
    <StyledMultiSelectWrapper ref={ref} $disabled={disabled} className={props?.className} style={props?.style}>
      <ChopLogicLabel label={label} required={required} inputId={comboboxId} />
      <SelectCombobox
        name={name}
        isOpened={isOpened}
        comboboxId={comboboxId}
        dropdownId={dropdownId}
        onClick={handleToggle}
        values={values}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
      />
      <SelectDropdown options={values} isOpened={isOpened} onClose={handleClose} dropdownId={dropdownId} onSelect={handleSelect} />
    </StyledMultiSelectWrapper>
  );
};

export default ChopLogicMultiSelect;
