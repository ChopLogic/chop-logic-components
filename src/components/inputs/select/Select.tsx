import { useContext, useRef, useState } from 'react';
import { useClickOutside } from 'hooks/use-click-outside';
import { useKeyPress } from 'hooks/use-key-press';

import { ChopLogicFormContext } from 'components/containers/form/elements/FormContext';
import ChopLogicLabel from 'components/misc/label/Label';

import SelectCombobox from './elements/Combobox';
import SelectDropdown from './elements/Dropdown';
import { getSelectInitialValue } from './helpers';
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
  const { onChangeFormInput, initialValues } = useContext(ChopLogicFormContext);
  const [isOpened, setIsOpened] = useState(false);
  const [selected, setSelected] = useState<SelectValue | undefined>(getSelectInitialValue({ name, options, defaultValue, initialValues }));
  const comboboxId = `${id}_combobox`;
  const dropdownId = `${id}_dropdown`;
  const ref = useRef<HTMLDivElement>(null);

  const handleClose = () => setIsOpened(false);

  const handleToggle = () => setIsOpened(!isOpened);

  const handleSelect = (id: string) => {
    const newValue = options.find((item) => item.id === id);
    setSelected(newValue);
    onChange?.(newValue);
    onChangeFormInput?.({ name, value: newValue });
  };

  const handleClear = () => {
    setSelected(undefined);
    onChange?.(undefined);
  };

  useClickOutside({ ref, onClickOutsideHandler: handleClose });
  useKeyPress({ keyCode: 'Escape', ref, onKeyPress: handleClose });

  return (
    <StyledSelectWrapper ref={ref} $disabled={disabled} style={props.style} className={props?.className}>
      <ChopLogicLabel label={label} required={required} inputId={comboboxId} />
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
        options={options}
        selected={selected}
        isOpened={isOpened}
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
