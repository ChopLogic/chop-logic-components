import { Label } from '@components/atoms';
import { ElementSize, IconName } from '@enums';
import { useFormLoading } from '@hooks';
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
  isLoading: isLoadingProp,
}) => {
  const isLoading = useFormLoading(isLoadingProp);
  const elementId = id ?? `checkbox-${name}`;

  const isDisabledOrLoading = disabled || isLoading;

  const checkboxClass = getClassName([
    'cl-checkbox',
    className,
    {
      'cl-checkbox_disabled': !!disabled,
      'cl-checkbox_loading': isLoading,
      'cl-checkbox_checked': !!checked,
    },
  ]);

  return (
    <div style={style} tabIndex={tabIndex} className={checkboxClass} aria-busy={isLoading}>
      <input
        id={elementId}
        name={name}
        type="checkbox"
        disabled={isDisabledOrLoading}
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
        iconSize={ElementSize.Medium}
      />
    </div>
  );
};

export default CheckboxStateless;
