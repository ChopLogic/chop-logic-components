import React from 'react';
import 'assets/common.module.css';
import styles from './styles.module.css';
import createClassName from 'utils/create-class-name';
import { UTFIconNames } from 'assets/icons/utf-icons';
import ChopLogicLabel from '../label/Label';
import ChopLogicErrorMessage from '../error-message/ErrorMessage';

export type ChopLogicTextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  name: string;
  label: string;
  icon?: UTFIconNames;
  valid?: boolean;
  errorMessage?: string;
};

const TextInput: React.FC<ChopLogicTextInputProps> = ({
  id,
  name,
  label,
  disabled,
  placeholder = 'Type here...',
  valid = true,
  required = false,
  errorMessage,
  ...props
}) => {
  const errorId = `${id}_error`;
  const containerClass = createClassName([styles.container, props?.className]);
  const wrapperClass = createClassName([
    styles.wrapper,
    props?.className,
    {
      [styles.disabled]: !!disabled,
      [styles.invalid]: !valid,
    },
  ]);

  return (
    <div className={containerClass}>
      <div className={wrapperClass}>
        <ChopLogicLabel label={label} required={required} inputId={id} className={styles.label} />
        <input
          id={id}
          name={name}
          type='text'
          className={styles.input}
          disabled={disabled}
          placeholder={placeholder}
          required={required}
          aria-invalid={!valid}
          aria-errormessage={errorId}
          {...props}
        />
      </div>
      <ChopLogicErrorMessage errorId={errorId} message={errorMessage} className={styles.error} visible={!valid} />
    </div>
  );
};

export default TextInput;
