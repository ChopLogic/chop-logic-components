import React, { useContext, useState } from 'react';

import { ChopLogicFormContext } from 'components/containers/form/elements/FormContext';
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
  isLabelHidden,
  required = false,
  iconPosition = 'left',
  defaultChecked,
  onChange,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(!!defaultChecked);
  const { onChangeFormInput } = useContext(ChopLogicFormContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const checked = e.target.checked;
    setIsChecked(checked);
    onChange?.(e);
    onChangeFormInput?.({ name, value: checked });
  };

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
        className='cl-checkbox__input'
        disabled={disabled}
        required={required}
        checked={isChecked}
        onChange={handleChange}
        aria-label={isLabelHidden ? label : undefined}
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
