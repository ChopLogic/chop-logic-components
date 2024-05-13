import React from 'react';
import 'assets/common.module.css';
import styles from './styles.module.css';
import createClassName from 'utils/create-class-name';
import { UTFIconNames } from 'assets/icons/utf-icons';
import ChopLogicLabel from '../label/Label';

export type ChopLogicTextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: UTFIconNames;
  valid?: boolean;
  label?: string;
};

const TextInput: React.FC<ChopLogicTextInputProps> = ({
  disabled,
  placeholder = 'Type here...',
  label = 'Input',
  valid = true,
  required = false,
  ...props
}) => {
  const inputClass = createClassName([
    styles.button,
    props?.className,
    {
      [styles.disabled]: !!disabled,
      [styles.invalid]: !valid,
    },
  ]);

  return (
    <ChopLogicLabel label={label} required={required}>
      <input type='text' className={inputClass} disabled={disabled} placeholder={placeholder} required={required} {...props} />
    </ChopLogicLabel>
  );
};

export default TextInput;
