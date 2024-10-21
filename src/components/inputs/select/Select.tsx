import { useRef } from 'react';
import { useClickOutside } from 'hooks/use-click-outside';
import { useElementIds } from 'hooks/use-element-ids';
import { useKeyPress } from 'hooks/use-key-press';

import ChopLogicLabel from 'components/inputs/_common/label/Label';

import SelectCombobox from './elements/Combobox';
import SelectDropdown from './elements/Dropdown';
import { useChopLogicSelectController } from './controller';
import { StyledSelectWrapper } from './Select.styled';
import { ChopLogicSelectProps } from './types';

const ChopLogicSelect: React.FC<ChopLogicSelectProps> = ({
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
  const { elementId, dropdownId } = useElementIds(props?.id);
  const { handleClear, handleClose, handleSelect, handleToggle, selected, opened } = useChopLogicSelectController({
    options,
    onChange,
    defaultValue,
    name,
  });

  useClickOutside({ ref, onClickOutsideHandler: handleClose });
  useKeyPress({ keyCode: 'Escape', ref, onKeyPress: handleClose });

  return (
    <StyledSelectWrapper ref={ref} $disabled={disabled} style={props.style} className={props?.className}>
      <ChopLogicLabel label={label} required={required} inputId={elementId} />
      <SelectCombobox
        name={name}
        opened={opened}
        comboboxId={elementId}
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
        comboboxId={elementId}
        onSelect={handleSelect}
        onClear={handleClear}
      />
    </StyledSelectWrapper>
  );
};

export default ChopLogicSelect;
