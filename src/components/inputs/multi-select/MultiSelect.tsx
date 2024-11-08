import React, { useRef } from 'react';
import { useClickOutside } from 'hooks/use-click-outside';
import { useElementIds } from 'hooks/use-element-ids';
import { useKeyPress } from 'hooks/use-key-press';

import ChopLogicLabel from 'components/inputs/_common/label/Label';

import SelectCombobox from './elements/Combobox';
import SelectDropdown from './elements/Dropdown';
import { useChopLogicMultiSelectController } from './controller';
import { StyledMultiSelectWrapper } from './MultiSelect.styled';
import { ChopLogicMultiSelectProps } from './types';

const ChopLogicMultiSelect: React.FC<ChopLogicMultiSelectProps> = ({
  options,
  name,
  label,
  required = false,
  placeholder = 'Not selected',
  disabled = false,
  onChange,
  defaultValue,
  id,
  ...rest
}) => {
  const ref = useRef(null);
  const { elementId, dropdownId } = useElementIds(id);
  const { handleClose, handleSelect, handleToggle, opened, values } = useChopLogicMultiSelectController({
    name,
    options,
    defaultValue,
    onChange,
  });

  useClickOutside({ ref, onClickOutsideHandler: handleClose });
  useKeyPress({ keyCode: 'Escape', ref, onKeyPress: handleClose });

  return (
    <StyledMultiSelectWrapper ref={ref} $disabled={disabled} {...rest}>
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
