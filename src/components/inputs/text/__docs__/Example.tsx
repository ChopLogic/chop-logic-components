import React from 'react';
import TextInput, { ChopLogicTextInputProps } from '../TextInput';

const Example: React.FC<ChopLogicTextInputProps> = ({
  id,
  name,
  label,
  disabled,
  placeholder = 'Type here...',
  valid = true,
  required = false,
  errorMessage,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        padding: '20px',
      }}
    >
      <TextInput
        id={id}
        name={name}
        placeholder={placeholder}
        label={label}
        valid={valid}
        required={required}
        disabled={disabled}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default Example;
