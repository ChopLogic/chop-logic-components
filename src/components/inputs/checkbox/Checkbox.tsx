import React, { useState } from 'react';
import CheckboxCheckedIcon from 'assets/icons/CheckboxChecked';
import CheckboxUncheckedIcon from 'assets/icons/CheckboxUnchecked';
import createClassName from 'utils/create-class-name';

import ChopLogicLabel from 'components/misc/label';

import { ChopLogicCheckboxProps } from './types';

import './Checkbox.scss';

const ChopLogicCheckbox: React.FC<ChopLogicCheckboxProps> = ({
  id,
  name,
  label,
  disabled,
  required = false,
  onChange,
  isLabelHidden,
  className,
  iconPosition = 'left',
  ...props
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const wrapperClass = createClassName(['cl-checkbox', className, { 'cl-checkbox_disabled': !!disabled }]);
  const labelClass = createClassName(['cl-checkbox__label']);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const checked = e.target.checked;
    setIsChecked(checked);
    if (onChange) onChange(e);
  };

  return (
    <div className={wrapperClass}>
      <input
        id={id}
        name={name}
        type='checkbox'
        className='cl-checkbox__input'
        disabled={disabled}
        required={required}
        checked={isChecked}
        onChange={handleChange}
        aria-label={isLabelHidden ? label : undefined}
        {...props}
      />
      <ChopLogicLabel
        label={label}
        required={required}
        inputId={id}
        className={labelClass}
        isTextHidden={isLabelHidden}
        icon={isChecked ? <CheckboxCheckedIcon /> : <CheckboxUncheckedIcon />}
        iconPosition={iconPosition}
      />
    </div>
  );
};

export default ChopLogicCheckbox;
