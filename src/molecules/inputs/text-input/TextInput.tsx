import { Label } from '@atoms';
import { Button } from '@atoms';
import { ButtonView, IconName } from '@enums';
import { useElementIds } from '@hooks';
import { TextInputProps } from '@models';
import { getClassName } from '@utils';
import { FC } from 'react';

import { ErrorMessage, Input } from '../__elements__/index.ts';
import { useTextInputController } from './TextInput.controller.ts';
import styles from './TextInput.module.scss';

const TextInput: FC<TextInputProps> = ({
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
  const { value, valid, handleChange, handleClear, passwordShown, togglePassword } = useTextInputController({
    defaultValue,
    name,
    onChange,
    onClear,
    required,
    validator,
  });
  const { elementId, errorId } = useElementIds(id);
  const isPasswordButtonVisible = type === 'password';
  const inputClass = getClassName([styles.wrapper, className]);

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
            <Button
              view={ButtonView.Inner}
              onClick={handleClear}
              label={`Clear input for ${label}`}
              icon={IconName.Remove}
              disabled={disabled}
            />
          )}
          {isPasswordButtonVisible && (
            <Button
              onClick={togglePassword}
              view={ButtonView.Inner}
              label='Toggle password visibility'
              icon={passwordShown ? IconName.Hide : IconName.Show}
              disabled={disabled}
            />
          )}
        </span>
        <ErrorMessage errorId={errorId} message={errorMessage} visible={!valid} className={styles.errorMessage} />
      </Input>
    </div>
  );
};

export default TextInput;
