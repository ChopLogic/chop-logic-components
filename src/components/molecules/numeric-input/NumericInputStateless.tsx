import { ErrorMessage, Input, Label } from '@components/atoms';
import { ButtonView, IconName } from '@enums';
import type { NumericInputProps } from '@types';
import { getClassName } from '@utils';
import type { FC } from 'react';
import Button from '../../atoms/button/Button';

import styles from './NumericInput.module.scss';

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
}) => {
  const elementId = id ?? `numeric-input-${name}`;
  const errorId = `${name}-error`;
  const inputClass = getClassName([styles.numeric, className]);

  return (
    <div style={style} className={inputClass}>
      <Label label={label} required={required} inputId={elementId} />
      <Input
        id={elementId}
        name={name}
        type="number"
        defaultValue={defaultValue}
        disabled={disabled}
        required={required}
        readOnly={readOnly}
        placeholder="0"
        aria-invalid={!!errorMessage}
        aria-errormessage={errorId}
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
              disabled={disabled}
            />
            <Button
              onClick={onIncrement}
              view={ButtonView.Inner}
              label={`Increment value for ${label}`}
              icon={IconName.ChevronRight}
              disabled={disabled}
            />
          </span>
        )}
        <ErrorMessage
          errorId={errorId}
          message={errorMessage}
          visible={!!errorMessage}
          className={styles.errorMessage}
        />
      </Input>
    </div>
  );
};

export default NumericInputStateless;
