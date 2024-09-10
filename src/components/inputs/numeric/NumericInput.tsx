import React from 'react';
import { useElementIds } from 'hooks/use-element-id';

import ChopLogicErrorMessage from 'components/misc/error-message/ErrorMessage';
import ChopLogicLabel from 'components/misc/label/Label';

import { useNumericInputController } from './helpers';
import { StyledNumericInput, StyledNumericInputContainer, StyledNumericInputWrapper } from './NumericInput.styled';

export type ChopLogicNumericInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  valid?: boolean;
  errorMessage?: string;
};

const NumericInput: React.FC<ChopLogicNumericInputProps> = ({
  name,
  label,
  errorMessage,
  defaultValue,
  onChange,
  min,
  max,
  placeholder = '0',
  disabled = false,
  valid = true,
  required = false,
  step = 1,
  ...props
}) => {
  const { elementId, errorId } = useElementIds(props?.id);
  const { value, handleChange, minValue, maxValue } = useNumericInputController({ name, defaultValue, min, max, onChange });

  return (
    <StyledNumericInputContainer className={props?.className} style={props?.style}>
      <StyledNumericInputWrapper $disabled={disabled} $invalid={!valid}>
        <ChopLogicLabel label={label} required={required} inputId={elementId} />
        <StyledNumericInput
          id={elementId}
          name={name}
          type='number'
          disabled={disabled}
          placeholder={placeholder}
          required={required}
          aria-invalid={!valid}
          aria-errormessage={errorId}
          value={value.toString()}
          onChange={handleChange}
          min={minValue}
          max={maxValue}
          step={step}
          readOnly={props?.readOnly}
          pattern={props?.pattern}
          onBlur={props?.onBlur}
          onFocus={props?.onFocus}
        />
      </StyledNumericInputWrapper>
      <ChopLogicErrorMessage errorId={errorId} message={errorMessage} visible={!valid} />
    </StyledNumericInputContainer>
  );
};

export default NumericInput;
