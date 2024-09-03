import React, { useContext, useState } from 'react';

import { ChopLogicFormContext } from 'components/containers/form/elements/FormContext';
import ChopLogicErrorMessage from 'components/misc/error-message/ErrorMessage';
import ChopLogicLabel from 'components/misc/label/Label';

import { getNumericInputInitialValue } from './helpers';
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
  placeholder = '0',
  disabled = false,
  valid = true,
  required = false,
  step = 1,
  ...props
}) => {
  const { onChangeFormInput, initialValues } = useContext(ChopLogicFormContext);
  const [inputValue, setInputValue] = useState<number | string>(getNumericInputInitialValue({ initialValues, defaultValue, name }));
  const errorId = `${id}_error`;
  const max = props?.max ? Number(props.max) : Number.MAX_SAFE_INTEGER;
  const min = props?.min ? Number(props.min) : Number.MIN_SAFE_INTEGER;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = Number(e.target.value);
    if (value > max) value = max;
    if (value < min) value = min;

    setInputValue(value);
    props?.onChange?.(e);
    onChangeFormInput?.({ name, value });
  };

  return (
    <StyledNumericInputContainer className={props?.className} style={props?.style}>
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
