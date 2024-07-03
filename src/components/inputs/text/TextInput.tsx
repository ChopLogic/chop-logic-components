import React, { useState } from 'react';
import 'assets/common.module.css';
import styles from './styles.module.css';
import createClassName from 'utils/create-class-name';
import ChopLogicLabel from '../../elements/label/Label';
import ChopLogicErrorMessage from '../../elements/error-message/ErrorMessage';

export type ChopLogicTextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  name: string;
  label: string;
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
  defaultValue,
  onChange,
  ...props
}) => {
  const [inputValue, setInputValue] = useState<string>(typeof defaultValue === 'string' ? defaultValue : '');
  const errorId = `${id}_error`;
  const containerClass = createClassName([styles.container, props?.className]);
  const wrapperClass = createClassName([
    styles.wrapper,
    {
      [styles.disabled]: !!disabled,
      [styles.invalid]: !valid,
    },
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value = '' } = e.target;
    setInputValue(value);
    if (onChange) onChange(e);
  };

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
          value={inputValue}
          onChange={handleChange}
          {...props}
        />
      </div>
      <ChopLogicErrorMessage errorId={errorId} message={errorMessage} className={styles.error} visible={!valid} />
    </div>
  );
};

export default TextInput;
