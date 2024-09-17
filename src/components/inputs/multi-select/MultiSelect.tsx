import { useRef } from 'react';
import { useClickOutside } from 'hooks/use-click-outside';
import { useElementIds } from 'hooks/use-element-ids';
import { useKeyPress } from 'hooks/use-key-press';

import ChopLogicLabel from 'components/misc/label/Label';

import { SelectValue } from '../select/Select';

import SelectCombobox from './elements/Combobox';
import SelectDropdown from './elements/Dropdown';
import { useChopLogicMultiSelectController } from './helpers';
import { StyledMultiSelectWrapper } from './MultiSelect.styled';

export type MultiSelectValue = SelectValue & { selected: boolean };

export type ChopLogicMultiSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  name: string;
  label: string;
  options: SelectValue[];
  onChange?: (values?: SelectValue[]) => void;
  placeholder?: string;
};

export type MultiSelectDropdownProps = {
  options: MultiSelectValue[];
  opened: boolean;
  dropdownId: string;
  onClose: () => void;
  onSelect: (id: string) => void;
};

const ChopLogicMultiSelect: React.FC<ChopLogicMultiSelectProps> = ({
  options,
  name,
  label,
  required = false,
  placeholder = 'Not selected',
  disabled = false,
  onChange,
  defaultValue,
  ...props
}) => {
  const ref = useRef(null);
  const { elementId, dropdownId } = useElementIds(props?.id);
  const { handleClose, handleSelect, handleToggle, opened, values } = useChopLogicMultiSelectController({
    name,
    options,
    defaultValue,
    onChange,
  });

  useClickOutside({ ref, onClickOutsideHandler: handleClose });
  useKeyPress({ keyCode: 'Escape', ref, onKeyPress: handleClose });

  return (
    <StyledMultiSelectWrapper ref={ref} $disabled={disabled} className={props?.className} style={props?.style}>
      <ChopLogicLabel label={label} required={required} inputId={elementId} />
      <SelectCombobox
        name={name}
        opened={opened}
        comboboxId={elementId}
        dropdownId={dropdownId}
        onClick={handleToggle}
        values={values}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
      />
      <SelectDropdown options={values} opened={opened} onClose={handleClose} dropdownId={dropdownId} onSelect={handleSelect} />
    </StyledMultiSelectWrapper>
  );
};

export default ChopLogicMultiSelect;
