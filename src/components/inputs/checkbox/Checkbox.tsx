import React, { useState } from 'react';
import CheckboxCheckedIcon from 'components/misc/icon/elements/CheckboxChecked';
import CheckboxUncheckedIcon from 'components/misc/icon/elements/CheckboxUnchecked';

import ChopLogicLabel from 'components/misc/label/Label';

import { StyledCheckboxInput, StyledCheckboxWrapper } from './Checkbox.styled';

export type ChopLogicCheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  name: string;
  label: string;
  isLabelHidden?: boolean;
  iconPosition?: 'left' | 'right';
};

const ChopLogicCheckbox: React.FC<ChopLogicCheckboxProps> = ({
  id,
  name,
  label,
  disabled,
  onChange,
  isLabelHidden,
  required = false,
  iconPosition = 'left',
  ...props
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const checked = e.target.checked;
    setIsChecked(checked);
    if (onChange) onChange(e);
  };

  return (
    <StyledCheckboxWrapper $disabled={!!disabled}>
      <StyledCheckboxInput
        id={id}
        name={name}
        type='checkbox'
        className='cl-checkbox__input'
        disabled={disabled}
        required={required}
        checked={isChecked}
        onChange={handleChange}
        aria-label={isLabelHidden ? label : undefined}
        {...props}
      />
      <ChopLogicLabel
        label={label}
        required={required}
        inputId={id}
        isTextHidden={isLabelHidden}
        icon={isChecked ? <CheckboxCheckedIcon /> : <CheckboxUncheckedIcon />}
        iconPosition={iconPosition}
      />
    </StyledCheckboxWrapper>
  );
};

export default ChopLogicCheckbox;
