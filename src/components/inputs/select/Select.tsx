import { useRef, useState } from 'react';
import { useClickOutside } from 'hooks/use-click-outside';
import { useKeyPress } from 'hooks/use-key-press';

import ChopLogicLabel from 'components/misc/label/Label';

import SelectCombobox from './elements/Combobox';
import SelectDropdown from './elements/Dropdown';
import { StyledSelectWrapper } from './Select.styled';
import { ChopLogicSelectProps, SelectValue } from './types';

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
  const [selected, setSelected] = useState<SelectValue>();
  const comboboxId = `${id}_combobox`;
  const dropdownId = `${id}_dropdown`;
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
        values={values}
        selected={selected}
        isOpened={isOpened}
        onClose={handleClose}
        dropdownId={dropdownId}
        comboboxId={comboboxId}
        onSelect={handleSelect}
      />
    </StyledSelectWrapper>
  );
};

export default ChopLogicSelect;
