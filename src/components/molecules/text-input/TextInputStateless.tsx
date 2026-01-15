import { Button, ErrorMessage, Input, Label } from '@components/atoms';
import { ButtonView, IconName } from '@enums';
import type { TextInputProps } from '@types';
import { getClassName } from '@utils';
import { type FC, useState } from 'react';

import styles from './TextInput.module.scss';

const TextInputStateless: FC<TextInputProps> = ({
  name,
  label,
  errorMessage,
  value,
  onChange,
  onBlur,
  onFocus,
  onClear,
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
  // Generate elementId and errorId from id prop without useElementIds hook for SSR compatibility
  const elementId = id || `text-input-${Math.random().toString(36).slice(2, 9)}`;
  const errorId = `${elementId}-error`;
  const [passwordShown, setPasswordShown] = useState(false);
  const isPasswordButtonVisible = type === 'password';
  const inputClass = getClassName([styles.wrapper, className]);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleClear = () => {
    if (onChange) {
      onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
    }
    onClear?.();
  };

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
        aria-invalid={!!errorMessage}
        aria-errormessage={errorId}
        aria-readonly={readOnly}
        value={value ?? ''}
        onChange={onChange}
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
              label="Toggle password visibility"
              icon={passwordShown ? IconName.Hide : IconName.Show}
              disabled={disabled}
            />
          )}
        </span>
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

export default TextInputStateless;
