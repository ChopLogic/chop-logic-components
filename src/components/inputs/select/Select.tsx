import React, { useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import { ChopLogicLabel } from '@/elements';
import { StyledSelect } from '@/elements/styled/Select.styled';
import { useClickOutside, useElementIds, useKeyPress } from '@/hooks';
import { ChopLogicSelectProps } from '@/types';
import { getChopLogicTheme } from '@/utils';

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
  theme,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const themeValues = getChopLogicTheme(theme);
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
    <ThemeProvider theme={themeValues}>
      <StyledSelect ref={ref} {...rest}>
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
      </StyledSelect>
    </ThemeProvider>
  );
};

export default ChopLogicSelect;
