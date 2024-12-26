import React from 'react';

import { ChopLogicErrorMessage, ChopLogicInputInnerButton, ChopLogicLabel } from '@/elements';
import { ChopLogicIconName } from '@/enums';
import { useChopLogicTheme, useElementIds } from '@/hooks';
import { ChopLogicNumericInputProps } from '@/models';

import { useChopLogicNumericInputController } from './controller';
import { StyledNumericInput } from './NumericInput.styled';

const ChopLogicNumericInput: React.FC<ChopLogicNumericInputProps> = ({
  name,
  label,
  errorMessage,
  onChange,
  onBlur,
  onFocus,
  onSpinButtonClick,
  validator,
  min,
  max,
  id,
  tabIndex,
  disabled = false,
  required = false,
  readOnly = false,
  hasSpinButtons = true,
  defaultValue = 0,
  step = 1,
  ...rest
}) => {
  const { elementId, errorId } = useElementIds(id);
  const theme = useChopLogicTheme();
  const { value, valid, handleChange, increment, decrement, minValue, maxValue } = useChopLogicNumericInputController({
    name,
    defaultValue,
    min,
    max,
    onChange,
    required,
    validator,
    step,
    onSpinButtonClick,
  });

  return (
    <StyledNumericInput $theme={theme} {...rest}>
      <ChopLogicLabel label={label} required={required} inputId={elementId} theme={theme} />
      <div>
        <input
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
          onBlur={onBlur}
          onFocus={onFocus}
          tabIndex={tabIndex}
        />
        {hasSpinButtons && (
          <span>
            <ChopLogicInputInnerButton
              onClick={decrement}
              label={`Decrement value for ${label}`}
              icon={ChopLogicIconName.ChevronLeft}
              disabled={disabled}
              theme={theme}
            />
            <ChopLogicInputInnerButton
              onClick={increment}
              label={`Increment value for ${label}`}
              icon={ChopLogicIconName.ChevronRight}
              disabled={disabled}
              theme={theme}
            />
          </span>
        )}
      </div>
      <ChopLogicErrorMessage errorId={errorId} message={errorMessage} visible={!valid} theme={theme} />
    </StyledNumericInput>
  );
};

export default ChopLogicNumericInput;
