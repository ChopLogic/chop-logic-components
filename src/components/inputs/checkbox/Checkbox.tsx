import React, { useState } from 'react';
import styles from './styles.module.css';
import 'assets/common.module.css';
import createClassName from 'utils/create-class-name';
import ChopLogicLabel from '../../misc/label/Label';

export type ChopLogicCheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  name: string;
  label: string;
  isLabelHidden?: boolean;
  labelPosition?: 'left' | 'right';
};

const Checkbox: React.FC<ChopLogicCheckboxProps> = ({
  id,
  name,
  label,
  disabled,
  required = false,
  onChange,
  isLabelHidden,
  labelPosition = 'right',
  className,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const wrapperClass = createClassName([styles.wrapper, className, { [styles.disabled]: !!disabled }]);
  const isLeftLabel = !isLabelHidden && labelPosition === 'left';
  const isRightLabel = !isLabelHidden && labelPosition === 'right';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    if (onChange) onChange(e);
  };

  const labelElement = <ChopLogicLabel label={label} required={required} inputId={id} className={styles.label} />;

  return (
    <div className={wrapperClass}>
      {isLeftLabel && labelElement}
      <input
        id={id}
        name={name}
        type='checkbox'
        className={styles.input}
        disabled={disabled}
        required={required}
        checked={isChecked}
        onChange={handleChange}
        aria-label={isLabelHidden ? label : undefined}
        {...props}
      />
      {isRightLabel && labelElement}
    </div>
  );
};

export default Checkbox;
