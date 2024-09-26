import React from 'react';
import { useElementIds } from 'hooks/use-element-ids';

import ChopLogicErrorMessage from 'components/inputs/_common/error-message/ErrorMessage';
import ChopLogicLabel from 'components/inputs/_common/label/Label';
import { CLIcon } from 'components/misc/icon/Icon';

import InputInnerButton from '../_common/input-inner-button/InputInnerButton';

import { useChopLogicNumericInputController } from './helpers';
import {
  StyledButtonsWrapper,
  StyledFieldWrapper,
  StyledNumericInput,
  StyledNumericInputContainer,
  StyledNumericInputWrapper,
} from './NumericInput.styled';

export type NumericValidationFunction = (input?: number) => boolean;

export type ChopLogicNumericInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  errorMessage?: string;
  validator?: NumericValidationFunction;
  clearable?: boolean;
  onClear?: () => void;
  onSpinButtonClick?: (value?: number) => void;
};

const ChopLogicNumericInput: React.FC<ChopLogicNumericInputProps> = ({
  name,
  label,
  errorMessage,
  onChange,
  onClear,
  validator,
  min,
  max,
  disabled = false,
  required = false,
  readOnly = false,
  clearable = false,
  defaultValue = 0,
  step = 1,
  ...props
}) => {
  const { elementId, errorId } = useElementIds(props?.id);
  const { value, valid, handleChange, handleClear, increment, decrement, minValue, maxValue } = useChopLogicNumericInputController({
    name,
    defaultValue,
    min,
    max,
    onChange,
    onClear,
    required,
    validator,
    step: +step,
  });

  return (
    <StyledNumericInputContainer className={props?.className} style={props?.style}>
      <StyledNumericInputWrapper $disabled={disabled} $invalid={!valid}>
        <ChopLogicLabel label={label} required={required} inputId={elementId} />
        <StyledFieldWrapper>
          <StyledNumericInput
            id={elementId}
            name={name}
            type='number'
            disabled={disabled}
            required={required}
            readOnly={readOnly}
            placeholder='0'
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
          <StyledButtonsWrapper>
            {clearable && <InputInnerButton onClick={handleClear} label={`Clear input for ${label}`} icon={CLIcon.Remove} />}
            <InputInnerButton onClick={increment} label={`Increment value for ${label}`} icon={CLIcon.Up} />
            <InputInnerButton onClick={decrement} label={`Decrement value for ${label}`} icon={CLIcon.Down} />
          </StyledButtonsWrapper>
        </StyledFieldWrapper>
      </StyledNumericInputWrapper>
      <ChopLogicErrorMessage errorId={errorId} message={errorMessage} visible={!valid} />
    </StyledNumericInputContainer>
  );
};

export default ChopLogicNumericInput;
