import React, { useState } from 'react';
import 'assets/common.module.css';
import styles from './styles.module.css';
import createClassName from 'utils/create-class-name';
import ChopLogicLabel from '../../misc/label/Label';

export type ChopLogicCheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  name: string;
  label: string;
};

const Checkbox: React.FC<ChopLogicCheckboxProps> = ({ id, name, label, disabled, required = false, onChange, ...props }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const errorId = `${id}_error`;
  const wrapperClass = createClassName([styles.wrapper, { [styles.disabled]: !!disabled }]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        className={styles.input}
        disabled={disabled}
        required={required}
        aria-errormessage={errorId}
        checked={isChecked}
        onChange={handleChange}
        {...props}
      />
      <ChopLogicLabel label={label} required={required} inputId={id} className={styles.label} />
    </div>
  );
};

export default Checkbox;
