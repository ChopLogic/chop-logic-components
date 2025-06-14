import React from 'react';
import { ChopLogicIconName } from '@enums';
import { useElementIds } from '@hooks';
import { ChopLogicTextInputProps } from '@models';
import { useChopLogicTextInputController } from './TextInput.controller.ts';
import { getClassName } from '@utils';
import styles from './TextInput.module.scss';
import { ErrorMessage, ButtonInner, Label, Input } from '@atoms';

const ChopLogicTextInput: React.FC<ChopLogicTextInputProps> = ({
  name,
  label,
  errorMessage,
  defaultValue,
  onChange,
  onBlur,
  onFocus,
  onClear,
  validator,
  maxLength,
  id,
  tabIndex,
  placeholder = 'Type here...',
  disabled = false,
  required = false,
  clearable = true,
  readOnly = false,
  autoComplete = 'off',
  type = 'text',
  className,
  ...rest
}) => {
  const { value, valid, handleChange, handleClear, passwordShown, togglePassword } = useChopLogicTextInputController({
    defaultValue,
    name,
    onChange,
    onClear,
    required,
    validator,
  });
  const { elementId, errorId } = useElementIds(id);
  const isPasswordButtonVisible = type === 'password';
  const inputClass = getClassName([styles.text, className]);

  return (
    <div {...rest} className={inputClass}>
      <Label label={label} required={required} inputId={elementId} />
      <Input
        id={elementId}
        name={name}
        type={passwordShown ? 'text' : type}
        disabled={disabled}
        placeholder={placeholder}
        required={required}
        readOnly={readOnly}
        autoComplete={autoComplete}
        aria-invalid={!valid}
        aria-errormessage={errorId}
        aria-readonly={readOnly}
        value={value}
        onChange={handleChange}
        maxLength={maxLength}
        onBlur={onBlur}
        onFocus={onFocus}
        tabIndex={tabIndex}
      >
        <span>
          {clearable && (
            <ButtonInner onClick={handleClear} label={`Clear input for ${label}`} icon={ChopLogicIconName.Remove} disabled={disabled} />
          )}
          {isPasswordButtonVisible && (
            <ButtonInner
              onClick={togglePassword}
              label='Toggle password visibility'
              icon={passwordShown ? ChopLogicIconName.Hide : ChopLogicIconName.Show}
              disabled={disabled}
            />
          )}
        </span>
      </Input>
      <ErrorMessage errorId={errorId} message={errorMessage} visible={!valid} className={styles.errorMessage} />
    </div>
  );
};

export default ChopLogicTextInput;
