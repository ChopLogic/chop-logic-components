import React from 'react';
import { useElementIds } from '@hooks';
import CheckboxCheckedIcon from '@assets/icons/svg/CheckboxCheckedIcon.tsx';
import CheckboxUncheckedIcon from '@assets/icons/svg/CheckboxUncheckedIcon.tsx';
import { ChopLogicCheckboxProps } from '@models';
import { useChopLogicCheckboxController } from './Checkbox.controller.ts';
import styles from './Checkbox.module.scss';
import { getClassName } from '@utils';
import { Label } from '@atoms';

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
  className,
  ...rest
}) => {
  const { handleChange, checked } = useChopLogicCheckboxController({ name, defaultChecked, onChange });
  const { elementId } = useElementIds(id);
  const checkboxClass = getClassName([
    styles.checkbox,
    className,
    {
      [styles.checkbox__disabled]: !!disabled,
      [styles.checkbox__checked]: checked,
    },
  ]);

  return (
    <div {...rest} className={checkboxClass}>
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
      <Label
        label={label}
        required={required}
        inputId={elementId}
        isTextHidden={noLabel}
        icon={checked ? <CheckboxCheckedIcon /> : <CheckboxUncheckedIcon />}
        iconPosition={iconPosition}
      />
    </div>
  );
};

export default ChopLogicCheckbox;
