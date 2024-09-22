import React from 'react';
import { useElementIds } from 'hooks/use-element-ids';

import ChopLogicErrorMessage from 'components/misc/error-message/ErrorMessage';
import ChopLogicLabel from 'components/misc/label/Label';

import { useChopLogicNumericInputController } from './helpers';
import { StyledNumericInput, StyledNumericInputContainer, StyledNumericInputWrapper } from './NumericInput.styled';

export type NumericValidationFunction = (input?: number) => boolean;

export type ChopLogicNumericInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  errorMessage?: string;
  validator?: NumericValidationFunction;
};

const ChopLogicNumericInput: React.FC<ChopLogicNumericInputProps> = ({
  name,
  label,
  errorMessage,
  onChange,
  validator,
  min,
  max,
  disabled = false,
  required = false,
  readOnly = false,
  defaultValue = 0,
  step = 1,
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
          readOnly={readOnly}
          aria-invalid={!valid}
          aria-errormessage={errorId}
          value={value.toString()}
          onChange={handleChange}
          min={minValue}
          max={maxValue}
          step={step}
          onBlur={props?.onBlur}
          onFocus={props?.onFocus}
          tabIndex={props?.tabIndex}
        />
      </StyledNumericInputWrapper>
      <ChopLogicErrorMessage errorId={errorId} message={errorMessage} visible={!valid} />
    </StyledNumericInputContainer>
  );
};

export default ChopLogicNumericInput;
