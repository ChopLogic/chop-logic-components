import React from 'react';
import 'assets/common.module.css';
import styles from './styles.module.css';
import createClassName from 'utils/create-class-name';
import { UTFIconNames } from 'assets/icons/utf-icons';

export type ChopLogicTextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: UTFIconNames;
};

const TextInput: React.FC<ChopLogicTextInputProps> = ({ disabled, ...props }) => {
  const inputClass = createClassName([
    styles.button,
    props?.className,
    {
      [styles.disabled]: !!disabled,
    },
  ]);

  return <input type='text' className={inputClass} disabled={disabled} {...props} />;
};

export default TextInput;
