import React from 'react';
import 'assets/common.module.css';
import styles from './styles.module.css';
import createClassName from 'utils/create-class-name';
import { UTFIconNames } from 'assets/icons/utf-icons';
import ChopLogicLabel from '../label/Label';

export type ChopLogicTextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  name: string;
  label: string;
  icon?: UTFIconNames;
  valid?: boolean;
};

const TextInput: React.FC<ChopLogicTextInputProps> = ({
  id,
  name,
  label,
  disabled,
  placeholder = 'Type here...',
  valid = true,
  required = false,
  ...props
}) => {
  const inputClass = createClassName([
    styles.input,
    props?.className,
    {
      [styles.disabled]: !!disabled,
      [styles.invalid]: !valid,
    },
  ]);

  return (
    <div className={styles.container}>
      <ChopLogicLabel label={label} required={required} inputId={id} />
      <input
        id={id}
        name={name}
        type='text'
        className={inputClass}
        disabled={disabled}
        placeholder={placeholder}
        required={required}
        {...props}
      />
    </div>
  );
};

export default TextInput;
