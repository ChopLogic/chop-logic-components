import React from 'react';
import { useElementIds } from 'hooks/use-element-id';

import CheckboxCheckedIcon from 'components/misc/icon/elements/CheckboxChecked';
import CheckboxUncheckedIcon from 'components/misc/icon/elements/CheckboxUnchecked';
import ChopLogicLabel from 'components/misc/label/Label';

import { StyledCheckboxInput, StyledCheckboxWrapper } from './Checkbox.styled';
import { useChopLogicCheckboxController } from './helpers';

export type ChopLogicCheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  isLabelHidden?: boolean;
  iconPosition?: 'left' | 'right';
};

const ChopLogicCheckbox: React.FC<ChopLogicCheckboxProps> = ({
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
  const { handleChange, checked } = useChopLogicCheckboxController({ name, defaultChecked, onChange });
  const { elementId } = useElementIds(props?.id);

  return (
    <StyledCheckboxWrapper
      $disabled={!!disabled}
      className={props?.className}
      tabIndex={props?.tabIndex}
      style={props?.style}
      title={props?.title}
    >
      <StyledCheckboxInput
        id={elementId}
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
        inputId={elementId}
        isTextHidden={isLabelHidden}
        icon={checked ? <CheckboxCheckedIcon /> : <CheckboxUncheckedIcon />}
        iconPosition={iconPosition}
      />
    </StyledCheckboxWrapper>
  );
};

export default ChopLogicCheckbox;
