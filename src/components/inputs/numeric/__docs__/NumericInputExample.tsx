import React from 'react';

import NumericInput, { ChopLogicNumericInputProps } from '../NumericInput';

const Example: React.FC<ChopLogicNumericInputProps> = ({
  id,
  name,
  label,
  errorMessage,
  placeholder = '0',
  disabled = false,
  valid = true,
  required = false,
  step = 1,
  max = Number.MAX_SAFE_INTEGER,
  min = Number.MIN_SAFE_INTEGER,
  defaultValue,
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
      <NumericInput
        id={id}
        name={name}
        placeholder={placeholder}
        label={label}
        valid={valid}
        required={required}
        disabled={disabled}
        errorMessage={errorMessage}
        max={max}
        min={min}
        step={step}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default Example;
