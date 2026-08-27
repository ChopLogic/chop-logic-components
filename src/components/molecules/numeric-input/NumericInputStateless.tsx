import { ErrorMessage, Input, Label } from '@components/atoms';
import { ButtonView, IconName } from '@enums';
import { useFormLoading } from '@hooks';
import type { NumericInputProps } from '@types';
import { getClassName } from '@utils';
import type { FC } from 'react';
import Button from '../../atoms/button/Button';

import './NumericInput.css';

const NumericInputStateless: FC<NumericInputProps> = ({
  name,
  label,
  errorMessage,
  onChange,
  onBlur,
  onFocus,
  onIncrement,
  onDecrement,
  min,
  max,
  id,
  tabIndex,
  disabled = false,
  required = false,
  readOnly = false,
  hasSpinButtons = true,
  step = 1,
  className,
  value,
  defaultValue,
  style,
  isLoading: isLoadingProp,
}) => {
  const isLoading = useFormLoading(isLoadingProp);
  const elementId = id ?? `numeric-input-${name}`;
  const errorId = `${name}-error`;
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
        defaultValue={defaultValue}
        disabled={disabled}
        required={required}
        readOnly={readOnly || isLoading}
        placeholder="0"
        aria-invalid={!!errorMessage}
        aria-errormessage={errorId}
        aria-readonly={readOnly || isLoading}
        value={value?.toString() ?? ''}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        onBlur={onBlur}
        onFocus={onFocus}
        tabIndex={tabIndex}
      >
        {hasSpinButtons && (
          <span>
            <Button
              onClick={onDecrement}
              view={ButtonView.Inner}
              label={`Decrement value for ${label}`}
              icon={IconName.ChevronLeft}
              disabled={disabled || isLoading}
            />
            <Button
              onClick={onIncrement}
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
          visible={!!errorMessage}
          className="cl-numeric-input__error-message"
        />
        {isLoading && <div className="cl-input__shimmer" />}
      </Input>
    </div>
  );
};

export default NumericInputStateless;
