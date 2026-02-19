import { Label } from '@components/atoms';
import { ElementSize, IconName } from '@enums';
import type { CheckboxProps } from '@types';
import { getClassName } from '@utils';
import type { FC } from 'react';

import './Checkbox.css';

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
    'cl-checkbox',
    className,
    {
      'cl-checkbox_disabled': !!disabled,
      'cl-checkbox_checked': !!checked,
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
        iconSize={ElementSize.Large}
      />
    </div>
  );
};

export default CheckboxStateless;
