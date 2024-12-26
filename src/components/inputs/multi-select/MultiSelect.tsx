import React, { useRef } from 'react';

import { ChopLogicLabel } from '@/elements';
import { StyledSelect } from '@/elements/styled/Select.styled';
import { useChopLogicTheme, useClickOutside, useElementIds, useKeyPress } from '@/hooks';
import { ChopLogicMultiSelectProps } from '@/models';

import SelectCombobox from './elements/Combobox';
import SelectDropdown from './elements/Dropdown';
import { useChopLogicMultiSelectController } from './controller';

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
  const theme = useChopLogicTheme();
  const { handleClose, handleSelect, handleToggle, opened, values } = useChopLogicMultiSelectController({
    name,
    options,
    defaultValue,
    onChange,
  });

  useClickOutside({ ref, onClickOutsideHandler: handleClose });
  useKeyPress({ keyCode: 'Escape', ref, onKeyPress: handleClose });

  return (
    <StyledSelect ref={ref} $theme={theme} {...rest}>
      <ChopLogicLabel label={label} required={required} inputId={elementId} theme={theme} />
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
        theme={theme}
      />
      <SelectDropdown
        theme={theme}
        options={values}
        opened={opened}
        onClose={handleClose}
        dropdownId={dropdownId}
        onSelect={handleSelect}
      />
    </StyledSelect>
  );
};

export default ChopLogicMultiSelect;
