import React from 'react';
import { ChopLogicErrorMessage, ChopLogicInputInnerButton, ChopLogicLabel } from '@elements';
import { ChopLogicIconName } from '@enums';
import { useChopLogicTheme, useElementIds } from '@hooks';
import { ChopLogicTextInputProps } from '@models';

import { useChopLogicTextInputController } from './controller';
import { StyledTextInput } from './TextInput.styled';

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
  const theme = useChopLogicTheme();

  return (
    <StyledTextInput $theme={theme} {...rest}>
      <ChopLogicLabel label={label} required={required} inputId={elementId} />
      <div>
        <input
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
        />
        <span>
          {clearable && (
            <ChopLogicInputInnerButton
              onClick={handleClear}
              label={`Clear input for ${label}`}
              icon={ChopLogicIconName.Remove}
              disabled={disabled}
            />
          )}
          {isPasswordButtonVisible && (
            <ChopLogicInputInnerButton
              onClick={togglePassword}
              label='Toggle password visibility'
              icon={passwordShown ? ChopLogicIconName.Hide : ChopLogicIconName.Show}
              disabled={disabled}
            />
          )}
        </span>
      </div>
      <ChopLogicErrorMessage errorId={errorId} message={errorMessage} visible={!valid} />
    </StyledTextInput>
  );
};

export default ChopLogicTextInput;
