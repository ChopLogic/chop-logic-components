import React from 'react';
import { ThemeProvider } from 'styled-components';

import { ChopLogicLabel } from '@/elements';
import { useElementIds } from '@/hooks';
import CheckboxCheckedIcon from '@/icons/CheckboxCheckedIcon.tsx';
import CheckboxUncheckedIcon from '@/icons/CheckboxUncheckedIcon.tsx';
import { ChopLogicCheckboxProps } from '@/types';
import { getChopLogicTheme } from '@/utils';

import { StyledCheckbox } from './Checkbox.styled';
import { useChopLogicCheckboxController } from './controller';

const ChopLogicCheckbox: React.FC<ChopLogicCheckboxProps> = ({
  name,
  label,
  disabled,
  noLabel,
  required = false,
  iconPosition = 'left',
  defaultChecked,
  onChange,
  id,
  theme,
  ...rest
}) => {
  const { handleChange, checked } = useChopLogicCheckboxController({ name, defaultChecked, onChange });
  const { elementId } = useElementIds(id);
  const themeValues = getChopLogicTheme(theme);

  return (
    <ThemeProvider theme={themeValues}>
      <StyledCheckbox $disabled={!!disabled} {...rest}>
        <input
          id={elementId}
          name={name}
          type='checkbox'
          disabled={disabled}
          required={required}
          checked={checked}
          onChange={handleChange}
          aria-label={noLabel ? label : undefined}
        />
        <ChopLogicLabel
          label={label}
          required={required}
          inputId={elementId}
          isTextHidden={noLabel}
          icon={checked ? <CheckboxCheckedIcon /> : <CheckboxUncheckedIcon />}
          iconPosition={iconPosition}
        />
      </StyledCheckbox>
    </ThemeProvider>
  );
};

export default ChopLogicCheckbox;
