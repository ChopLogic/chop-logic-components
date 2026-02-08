import { Label } from '@components/atoms';
import { IconName } from '@enums';
import { useElementIds } from '@hooks';
import type { CheckboxProps } from '@types';
import { getClassName } from '@utils';
import type { FC } from 'react';

import { useCheckboxController } from './Checkbox.controller';
import styles from './Checkbox.module.scss';

const CheckboxStateful: FC<CheckboxProps> = ({
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
  style,
  tabIndex,
}) => {
  const { handleChange, checked } = useCheckboxController({ name, defaultChecked, onChange });
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
    <div style={style} tabIndex={tabIndex} className={checkboxClass}>
      <input
        id={elementId}
        name={name}
        type="checkbox"
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
        icon={checked ? IconName.CheckSquare : IconName.Square}
        iconPosition={iconPosition}
      />
    </div>
  );
};

export default CheckboxStateful;
