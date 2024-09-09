import React from 'react';

import CheckboxCheckedIcon from 'components/misc/icon/elements/CheckboxChecked';
import CheckboxUncheckedIcon from 'components/misc/icon/elements/CheckboxUnchecked';
import ChopLogicLabel from 'components/misc/label/Label';

import { StyledCheckboxInput, StyledCheckboxWrapper } from './Checkbox.styled';
import { useCheckboxInputController } from './helpers';

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
  isLabelHidden,
  required = false,
  iconPosition = 'left',
  defaultChecked,
  onChange,
  ...props
}) => {
  const { handleChange, checked } = useCheckboxInputController({ name, defaultChecked, onChange });

  return (
    <StyledCheckboxWrapper
      $disabled={!!disabled}
      className={props?.className}
      tabIndex={props?.tabIndex}
      style={props?.style}
      title={props?.title}
    >
      <StyledCheckboxInput
        id={id}
        name={name}
        type='checkbox'
        disabled={disabled}
        required={required}
        checked={checked}
        onChange={handleChange}
        aria-label={isLabelHidden ? label : undefined}
      />
      <ChopLogicLabel
        label={label}
        required={required}
        inputId={id}
        isTextHidden={isLabelHidden}
        icon={checked ? <CheckboxCheckedIcon /> : <CheckboxUncheckedIcon />}
        iconPosition={iconPosition}
      />
    </StyledCheckboxWrapper>
  );
};

export default ChopLogicCheckbox;
