import React from 'react';
import { ChopLogicLabel } from '@elements';
import { useChopLogicTheme, useElementIds } from '@hooks';
import CheckboxCheckedIcon from '@icons/svg/CheckboxCheckedIcon.tsx';
import CheckboxUncheckedIcon from '@icons/svg/CheckboxUncheckedIcon.tsx';
import { ChopLogicCheckboxProps } from '@models';

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
  ...rest
}) => {
  const { handleChange, checked } = useChopLogicCheckboxController({ name, defaultChecked, onChange });
  const { elementId } = useElementIds(id);
  const theme = useChopLogicTheme();

  return (
    <StyledCheckbox $disabled={!!disabled} $theme={theme} $checked={checked} {...rest}>
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
        theme={theme}
      />
    </StyledCheckbox>
  );
};

export default ChopLogicCheckbox;
