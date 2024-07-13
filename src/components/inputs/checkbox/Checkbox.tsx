import React, { useState } from 'react';
import createClassName from 'utils/create-class-name';
import ChopLogicLabel from '../../elements/label/Label';
import { Icon } from 'enums/icon';
import 'styles';
import './Checkbox.styles.css';

export type ChopLogicCheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  name: string;
  label: string;
  isLabelHidden?: boolean;
};

const ChopLogicCheckbox: React.FC<ChopLogicCheckboxProps> = ({
  id,
  name,
  label,
  disabled,
  required = false,
  onChange,
  isLabelHidden,
  className,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const wrapperClass = createClassName(['cl-checkbox', className, { 'cl-checkbox_disabled': !!disabled }]);
  const labelClass = createClassName(['cl-checkbox__label', { [Icon.Checked]: isChecked, [Icon.Unchecked]: !isChecked }]);

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
      <ChopLogicLabel label={label} required={required} inputId={id} className={labelClass} isTextHidden={isLabelHidden} />
    </div>
  );
};

export default ChopLogicCheckbox;
