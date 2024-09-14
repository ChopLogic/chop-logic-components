import React from 'react';

import TextInput, { ChopLogicTextInputProps } from '../TextInput';

const Example: React.FC<ChopLogicTextInputProps> = ({
  id,
  name,
  label,
  errorMessage,
  validator,
  placeholder = 'Type here...',
  disabled = false,
  required = false,
  hasClearButton = true,
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
        validator={validator}
        required={required}
        disabled={disabled}
        errorMessage={errorMessage}
        hasClearButton={hasClearButton}
        style={{ width: '180px' }}
      />
    </div>
  );
};

export default Example;
