import React from 'react';
import { useElementIds } from 'hooks/use-element-id';

import ChopLogicErrorMessage from 'components/misc/error-message/ErrorMessage';
import ChopLogicLabel from 'components/misc/label/Label';

import { useChopLogicNumericInputController } from './helpers';
import { StyledNumericInput, StyledNumericInputContainer, StyledNumericInputWrapper } from './NumericInput.styled';

export type NumericValidationFunction = (input?: number) => boolean;

export type ChopLogicNumericInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  valid?: boolean;
  errorMessage?: string;
  validator?: NumericValidationFunction;
};

const ChopLogicNumericInput: React.FC<ChopLogicNumericInputProps> = ({
  name,
  label,
  errorMessage,
  defaultValue,
  onChange,
  min,
  max,
  disabled = false,
  required = false,
  step = 1,
  validator,
  ...props
}) => {
  const { elementId, errorId } = useElementIds(props?.id);
  const { value, valid, handleChange, minValue, maxValue } = useChopLogicNumericInputController({
    name,
    defaultValue,
    min,
    max,
    onChange,
    required,
    validator,
  });

  return (
    <StyledNumericInputContainer className={props?.className} style={props?.style}>
      <StyledNumericInputWrapper $disabled={disabled} $invalid={!valid}>
        <ChopLogicLabel label={label} required={required} inputId={elementId} />
        <StyledNumericInput
          id={elementId}
          name={name}
          type='number'
          disabled={disabled}
          required={required}
          aria-invalid={!valid}
          aria-errormessage={errorId}
          value={value.toString()}
          onChange={handleChange}
          min={minValue}
          max={maxValue}
          step={step}
          placeholder={props?.placeholder}
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

export default ChopLogicNumericInput;
