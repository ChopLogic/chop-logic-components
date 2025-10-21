import { ErrorMessage, Input, Label } from '@atoms';
import Button from '@atoms/button/Button';
import { ButtonView, IconName } from '@enums';
import { useElementIds } from '@hooks';
import type { NumericInputProps } from '@models';
import { getClassName } from '@utils';
import type { FC } from 'react';

import { useNumericInputController } from './NumericInput.controller';
import styles from './NumericInput.module.scss';

const NumericInput: FC<NumericInputProps> = ({
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
  const { value, valid, handleChange, increment, decrement, minValue, maxValue } =
    useNumericInputController({
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
        type="number"
        disabled={disabled}
        required={required}
        readOnly={readOnly}
        placeholder="0"
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
            <Button
              onClick={decrement}
              view={ButtonView.Inner}
              label={`Decrement value for ${label}`}
              icon={IconName.ChevronLeft}
              disabled={disabled}
            />
            <Button
              onClick={increment}
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
          visible={!valid}
          className={styles.errorMessage}
        />
      </Input>
    </div>
  );
};

export default NumericInput;
