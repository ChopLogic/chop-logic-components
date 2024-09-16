import React from 'react';

import NumericInput, { ChopLogicNumericInputProps } from '../NumericInput';

const Example: React.FC<ChopLogicNumericInputProps> = ({
  id,
  name,
  label,
  errorMessage,
  placeholder = '0',
  disabled = false,
  required = false,
  step = 1,
  max = Number.MAX_SAFE_INTEGER,
  min = Number.MIN_SAFE_INTEGER,
  defaultValue,
  validator,
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
        required={required}
        disabled={disabled}
        errorMessage={errorMessage}
        max={max}
        min={min}
        step={step}
        defaultValue={defaultValue}
        style={{ width: '180px' }}
        validator={validator}
      />
    </div>
  );
};

export default Example;
