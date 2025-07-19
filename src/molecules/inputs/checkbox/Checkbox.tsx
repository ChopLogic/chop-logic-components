import CheckboxCheckedIcon from '@assets/icons/svg/CheckboxCheckedIcon.tsx';
import CheckboxUncheckedIcon from '@assets/icons/svg/CheckboxUncheckedIcon.tsx';
import { Label } from '@atoms';
import { useElementIds } from '@hooks';
import { ChopLogicCheckboxProps } from '@models';
import { getClassName } from '@utils';
import React from 'react';

import { useChopLogicCheckboxController } from './Checkbox.controller.ts';
import styles from './Checkbox.module.scss';

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
