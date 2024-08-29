import { useContext, useRef, useState } from 'react';
import { useClickOutside } from 'hooks/use-click-outside';
import { useKeyPress } from 'hooks/use-key-press';

import { ChopLogicFormContext } from 'components/containers/form/FormContext';
import ChopLogicLabel from 'components/misc/label/Label';

import SelectCombobox from './elements/Combobox';
import SelectDropdown from './elements/Dropdown';
import { StyledMultiSelectWrapper } from './MultiSelect.styled';

export type MultiSelectValue = {
  id: string;
  label: string;
  selected: boolean;
};

export type ChopLogicMultiSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  id: string;
  name: string;
  label: string;
  values: MultiSelectValue[];
  onSelectChange?: (values?: MultiSelectValue[]) => void;
  placeholder?: string;
};

export type MultiSelectDropdownProps = {
  values: MultiSelectValue[];
  isOpened: boolean;
  dropdownId: string;
  onClose: () => void;
  onSelect: (id: string) => void;
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
  const { onChangeFormInput } = useContext(ChopLogicFormContext);
  const comboboxId = `${id}_combobox`;
  const dropdownId = `${id}_dropdown`;
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
    onChangeFormInput?.({ name, value: newValues });
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
        values={selectedValues}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
      />
      <SelectDropdown values={selectedValues} isOpened={isOpened} onClose={handleClose} dropdownId={dropdownId} onSelect={handleSelect} />
    </StyledMultiSelectWrapper>
  );
};

export default ChopLogicMultiSelect;
