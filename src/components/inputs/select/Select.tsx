import React, { useRef } from 'react';
import { ChopLogicLabel } from '@elements';
import { StyledSelect } from '@elements/styled/Select.styled';
import { useChopLogicTheme, useClickOutside, useElementIds, useKeyPress } from '@hooks';
import { ChopLogicSelectProps } from '@models';

import SelectCombobox from './elements/Combobox';
import SelectDropdown from './elements/Dropdown';
import { useChopLogicSelectController } from './controller';

const ChopLogicSelect: React.FC<ChopLogicSelectProps> = ({
  options,
  onChange,
  name,
  label,
  defaultValue,
  id,
  placeholder = 'Not selected',
  required = false,
  disabled = false,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const theme = useChopLogicTheme();
  const { elementId, dropdownId } = useElementIds(id);
  const { handleClear, handleClose, handleSelect, handleToggle, selected, opened } = useChopLogicSelectController({
    options,
    onChange,
    defaultValue,
    name,
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
        selected={selected}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        theme={theme}
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
        theme={theme}
      />
    </StyledSelect>
  );
};

export default ChopLogicSelect;
