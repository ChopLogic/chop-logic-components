import React, { useState } from 'react';

import ChopLogicErrorMessage from 'components/misc/error-message/ErrorMessage';
import ChopLogicLabel from 'components/misc/label/Label';

import { StyledNumericInput, StyledNumericInputContainer, StyledNumericInputWrapper } from './NumericInput.styled';

export type ChopLogicNumericInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  name: string;
  label: string;
  valid?: boolean;
  errorMessage?: string;
};

const NumericInput: React.FC<ChopLogicNumericInputProps> = ({
  id,
  name,
  label,
  errorMessage,
  defaultValue,
  onChange,
  placeholder = '0',
  disabled = false,
  valid = true,
  required = false,
  step = 1,
  ...props
}) => {
  const [inputValue, setInputValue] = useState<number | string>(typeof defaultValue === 'number' ? defaultValue : 0);
  const errorId = `${id}_error`;
  const max = props?.max ? Number(props.max) : Number.MAX_SAFE_INTEGER;
  const min = props?.min ? Number(props.min) : Number.MIN_SAFE_INTEGER;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = Number(e.target.value);
    if (value > max) value = max;
    if (value < min) value = min;

    setInputValue(value);
    if (onChange) onChange(e);
  };

  return (
    <StyledNumericInputContainer className={props?.className}>
      <StyledNumericInputWrapper $disabled={disabled} $invalid={!valid}>
        <ChopLogicLabel label={label} required={required} inputId={id} />
        <StyledNumericInput
          id={id}
          name={name}
          type='number'
          disabled={disabled}
          placeholder={placeholder}
          required={required}
          aria-invalid={!valid}
          aria-errormessage={errorId}
          value={inputValue.toString()}
          onChange={handleChange}
          max={max}
          min={min}
          step={step}
          {...props}
        />
      </StyledNumericInputWrapper>
      <ChopLogicErrorMessage errorId={errorId} message={errorMessage} visible={!valid} />
    </StyledNumericInputContainer>
  );
};

export default NumericInput;
