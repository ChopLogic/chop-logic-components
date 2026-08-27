import { ErrorMessage, Input, Label } from '@components/atoms';
import { useFormLoading } from '@hooks';
import type { TextInputProps } from '@types';
import { getClassName } from '@utils';
import { type FC, useState } from 'react';

import './TextInput.css';
import TextInputButtons from './TextInputButtons';

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
  style,
  defaultValue,
  isLoading: isLoadingProp,
}) => {
  const isLoading = useFormLoading(isLoadingProp);
  const elementId = id ?? `text-input-${name}`;
  const errorId = `${name}-error`;
  const [passwordShown, setPasswordShown] = useState(false);
  const isPasswordButtonVisible = type === 'password';
  const inputClass = getClassName([
    'cl-text-input',
    className,
    { 'cl-text-input_loading': isLoading },
  ]);

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
    <div style={style} className={inputClass} aria-busy={isLoading}>
      <Label label={label} required={required} inputId={elementId} />
      <Input
        id={elementId}
        name={name}
        type={passwordShown ? 'text' : type}
        disabled={disabled}
        placeholder={placeholder}
        required={required}
        readOnly={readOnly || isLoading}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        aria-invalid={!!errorMessage}
        aria-errormessage={errorId}
        aria-readonly={readOnly || isLoading}
        value={value ?? ''}
        onChange={onChange}
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
          disabled={disabled || isLoading}
        />
        <ErrorMessage
          errorId={errorId}
          message={errorMessage}
          visible={!!errorMessage}
          className="cl-text-input__error-message"
        />
        {isLoading && <div className="cl-input__shimmer" />}
      </Input>
    </div>
  );
};

export default TextInputStateless;
