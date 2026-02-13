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
  const elementId = id ?? `checkbox-${name}`;
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
        icon={checked ? IconName.CheckSquare : IconName.Square}
        iconPosition={iconPosition}
        iconSize="l"
      />
    </div>
  );
};

export default CheckboxStateless;
