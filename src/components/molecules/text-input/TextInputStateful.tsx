import { ErrorMessage, Input, Label } from '@components/atoms';
import { useElementIds } from '@hooks';
import type { TextInputProps } from '@types';
import { getClassName } from '@utils';
import type { FC } from 'react';

import { useTextInputController } from './TextInput.controller';
import styles from './TextInput.module.scss';
import TextInputButtons from './TextInputButtons';

const TextInputStateful: FC<TextInputProps> = ({
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
  const { value, valid, handleChange, handleClear, passwordShown, togglePassword } =
    useTextInputController({
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
        <TextInputButtons
          clearable={clearable}
          isPasswordButtonVisible={isPasswordButtonVisible}
          handleClear={handleClear}
          togglePassword={togglePassword}
          passwordShown={passwordShown}
          label={label}
          disabled={disabled}
        />
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

export default TextInputStateful;
