import React, { useRef } from 'react';
import { useClickOutside } from 'hooks/use-click-outside';
import { useElementIds } from 'hooks/use-element-ids';
import { useKeyPress } from 'hooks/use-key-press';
import { ThemeProvider } from 'styled-components';
import { getChopLogicTheme } from 'utils/get-chop-logic-theme.ts';

import ChopLogicLabel from 'components/inputs/_common/label/Label';
import { StyledSelect } from 'components/inputs/_common/styled/Select.styled.tsx';

import SelectCombobox from './elements/Combobox';
import SelectDropdown from './elements/Dropdown';
import { useChopLogicMultiSelectController } from './controller';
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
  theme,
  ...rest
}) => {
  const ref = useRef(null);
  const { elementId, dropdownId } = useElementIds(id);
  const themeValues = getChopLogicTheme(theme);
  const { handleClose, handleSelect, handleToggle, opened, values } = useChopLogicMultiSelectController({
    name,
    options,
    defaultValue,
    onChange,
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
          values={values}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
        />
        <SelectDropdown options={values} opened={opened} onClose={handleClose} dropdownId={dropdownId} onSelect={handleSelect} />
      </StyledSelect>
    </ThemeProvider>
  );
};

export default ChopLogicMultiSelect;
