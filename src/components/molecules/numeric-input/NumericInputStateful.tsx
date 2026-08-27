import { ErrorMessage, Input, Label } from '@components/atoms';
import { ButtonView, IconName } from '@enums';
import { useElementIds, useFormLoading } from '@hooks';
import type { NumericInputProps } from '@types';
import { getClassName } from '@utils';
import type { FC } from 'react';
import Button from '../../atoms/button/Button';

import { useNumericInputController } from './NumericInput.controller';
import './NumericInput.css';

const NumericInputStateful: FC<NumericInputProps> = ({
  name,
  label,
  errorMessage,
  onChange,
  onBlur,
  onFocus,
  onIncrement,
  onDecrement,
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
  style,
  isLoading: isLoadingProp,
}) => {
  const isLoading = useFormLoading(isLoadingProp);
  const { elementId, errorId } = useElementIds(id);
  const { value, valid, handleChange, handleDecrement, handleIncrement, minValue, maxValue } =
    useNumericInputController({
      name,
      defaultValue,
      min,
      max,
      onChange,
      required,
      validator,
      step,
      onDecrement,
      onIncrement,
    });
  const inputClass = getClassName([
    'cl-numeric-input',
    className,
    { 'cl-numeric-input_loading': isLoading },
  ]);

  return (
    <div style={style} className={inputClass} aria-busy={isLoading}>
      <Label label={label} required={required} inputId={elementId} />
      <Input
        id={elementId}
        name={name}
        type="number"
        disabled={disabled}
        required={required}
        readOnly={readOnly || isLoading}
        placeholder="0"
        aria-invalid={!valid}
        aria-errormessage={errorId}
        aria-readonly={readOnly || isLoading}
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
            <Button
              onClick={handleDecrement}
              view={ButtonView.Inner}
              label={`Decrement value for ${label}`}
              icon={IconName.ChevronLeft}
              disabled={disabled || isLoading}
            />
            <Button
              onClick={handleIncrement}
              view={ButtonView.Inner}
              label={`Increment value for ${label}`}
              icon={IconName.ChevronRight}
              disabled={disabled || isLoading}
            />
          </span>
        )}
        <ErrorMessage
          errorId={errorId}
          message={errorMessage}
          visible={!valid}
          className="cl-numeric-input__error-message"
        />
        {isLoading && <div className="cl-input__shimmer" />}
      </Input>
    </div>
  );
};

export default NumericInputStateful;
