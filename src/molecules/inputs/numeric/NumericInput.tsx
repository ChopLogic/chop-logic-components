import React from 'react';
import { ChopLogicIconName } from '@enums';
import { useElementIds } from '@hooks';
import { ChopLogicNumericInputProps } from '@models';
import { useChopLogicNumericInputController } from './NumericInput.controller.ts';
import styles from './NumericInput.module.scss';
import { getClassName } from '@utils';
import { ErrorMessage, InnerButton, Label, Input } from '@atoms';

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
  className,
  ...rest
}) => {
  const { elementId, errorId } = useElementIds(id);
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
  const inputClass = getClassName([styles.numeric, className]);

  return (
    <div {...rest} className={inputClass}>
      <Label label={label} required={required} inputId={elementId} />
      <Input
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
      >
        {hasSpinButtons && (
          <span>
            <InnerButton
              onClick={decrement}
              label={`Decrement value for ${label}`}
              icon={ChopLogicIconName.ChevronLeft}
              disabled={disabled}
            />
            <InnerButton
              onClick={increment}
              label={`Increment value for ${label}`}
              icon={ChopLogicIconName.ChevronRight}
              disabled={disabled}
            />
          </span>
        )}
      </Input>
      <ErrorMessage errorId={errorId} message={errorMessage} visible={!valid} className={styles.errorMessage} />
    </div>
  );
};

export default ChopLogicNumericInput;
