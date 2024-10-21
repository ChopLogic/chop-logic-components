import React from 'react';
import { useElementIds } from 'hooks/use-element-ids';

import ChopLogicLabel from 'components/inputs/_common/label/Label';
import CheckboxCheckedIcon from 'components/misc/icon/elements/CheckboxChecked';
import CheckboxUncheckedIcon from 'components/misc/icon/elements/CheckboxUnchecked';

import { StyledCheckboxInput, StyledCheckboxWrapper } from './Checkbox.styled';
import { useChopLogicCheckboxController } from './controller';
import { ChopLogicCheckboxProps } from './types';

const ChopLogicCheckbox: React.FC<ChopLogicCheckboxProps> = ({
  name,
  label,
  disabled,
  noLabel,
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
    </StyledCheckboxWrapper>
  );
};

export default ChopLogicCheckbox;
