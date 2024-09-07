import { useRef } from 'react';
import { useClickOutside } from 'hooks/use-click-outside';
import { useKeyPress } from 'hooks/use-key-press';

import ChopLogicLabel from 'components/misc/label/Label';

import SelectCombobox from './elements/Combobox';
import SelectDropdown from './elements/Dropdown';
import { useSelectInputController } from './helpers';
import { StyledSelectWrapper } from './Select.styled';

export type ChopLogicSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  id: string;
  name: string;
  label: string;
  options: SelectValue[];
  onChange?: (value?: SelectValue) => void;
  placeholder?: string;
};

export type SelectValue = {
  id: string;
  label: string;
} & { [key in string]: unknown };

const ChopLogicSelect: React.FC<ChopLogicSelectProps> = ({
  id,
  options,
  onChange,
  name,
  label,
  placeholder = 'Not selected',
  required = false,
  disabled = false,
  defaultValue,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const comboboxId = `${id}_combobox`;
  const dropdownId = `${id}_dropdown`;
  const { handleClear, handleClose, handleSelect, handleToggle, selected, opened } = useSelectInputController({
    options,
    onChange,
    defaultValue,
    name,
  });

  useClickOutside({ ref, onClickOutsideHandler: handleClose });
  useKeyPress({ keyCode: 'Escape', ref, onKeyPress: handleClose });

  return (
    <StyledSelectWrapper ref={ref} $disabled={disabled} style={props.style} className={props?.className}>
      <ChopLogicLabel label={label} required={required} inputId={comboboxId} />
      <SelectCombobox
        name={name}
        opened={opened}
        comboboxId={comboboxId}
        dropdownId={dropdownId}
        onClick={handleToggle}
        selected={selected}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
      />
      <SelectDropdown
        options={options}
        selected={selected}
        opened={opened}
        onClose={handleClose}
        dropdownId={dropdownId}
        comboboxId={comboboxId}
        onSelect={handleSelect}
        onClear={handleClear}
      />
    </StyledSelectWrapper>
  );
};

export default ChopLogicSelect;
