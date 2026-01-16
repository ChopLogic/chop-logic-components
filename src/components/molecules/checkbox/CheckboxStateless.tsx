import { Label } from '@components/atoms';
import { IconName } from '@enums';
import type { CheckboxProps } from '@types';
import { getClassName } from '@utils';
import type { FC } from 'react';

import styles from './Checkbox.module.scss';

const CheckboxStateless: FC<CheckboxProps> = ({
  name,
  label,
  disabled,
  noLabel,
  required = false,
  iconPosition = 'left',
  checked,
  onChange,
  id,
  className,
  style,
  tabIndex,
}) => {
  // Generate elementId from id prop without useElementIds hook for SSR compatibility
  const elementId = id || `checkbox-${Math.random().toString(36).slice(2, 9)}`;
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
        checked={checked ?? false}
        onChange={onChange}
        aria-label={noLabel ? label : undefined}
      />
      <Label
        label={label}
        required={required}
        inputId={elementId}
        isTextHidden={noLabel}
        icon={checked ? IconName.CheckboxChecked : IconName.CheckboxUnchecked}
        iconPosition={iconPosition}
      />
    </div>
  );
};

export default CheckboxStateless;
