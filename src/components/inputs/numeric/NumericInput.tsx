import React from 'react';
import { useElementIds } from 'hooks/use-element-ids';
import { ThemeProvider } from 'styled-components';
import { getChopLogicTheme } from 'utils/get-chop-logic-theme.ts';

import ChopLogicErrorMessage from 'components/inputs/_common/error-message/ErrorMessage';
import ChopLogicLabel from 'components/inputs/_common/label/Label';
import { ChopLogicIconName } from 'components/misc/icon/Icon';

import InputInnerButton from '../_common/input-inner-button/InputInnerButton';

import { useChopLogicNumericInputController } from './controller';
import { StyledNumericInput } from './NumericInput.styled';
import { ChopLogicNumericInputProps } from './types';

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
  theme,
  ...rest
}) => {
  const { elementId, errorId } = useElementIds(id);
  const themeValues = getChopLogicTheme(theme);
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
    <ThemeProvider theme={themeValues}>
      <StyledNumericInput {...rest}>
        <ChopLogicLabel label={label} required={required} inputId={elementId} />
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
              <InputInnerButton
                onClick={decrement}
                label={`Decrement value for ${label}`}
                icon={ChopLogicIconName.ChevronLeft}
                disabled={disabled}
              />
              <InputInnerButton
                onClick={increment}
                label={`Increment value for ${label}`}
                icon={ChopLogicIconName.ChevronRight}
                disabled={disabled}
              />
            </span>
          )}
        </div>
        <ChopLogicErrorMessage errorId={errorId} message={errorMessage} visible={!valid} />
      </StyledNumericInput>
    </ThemeProvider>
  );
};

export default ChopLogicNumericInput;
