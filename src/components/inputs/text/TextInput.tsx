import React, { useState } from 'react';
import createClassName from 'utils/create-class-name';

import ChopLogicErrorMessage from 'components/misc/error-message';
import ChopLogicLabel from 'components/misc/label';

import { ChopLogicTextInputProps } from './types';

import './TextInput.scss';

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
  const containerClass = createClassName(['cl-text-input', props?.className]);
  const wrapperClass = createClassName([
    'cl-text-input__wrapper',
    {
      'cl-text-input__wrapper_disabled': !!disabled,
      'cl-text-input__wrapper_invalid': !valid,
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
        <ChopLogicLabel label={label} required={required} inputId={id} className='cl-text-input__label' />
        <input
          id={id}
          name={name}
          type='text'
          className='cl-text-input__textbox'
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
      <ChopLogicErrorMessage errorId={errorId} message={errorMessage} className='cl-text-input__error' visible={!valid} />
    </div>
  );
};

export default TextInput;
