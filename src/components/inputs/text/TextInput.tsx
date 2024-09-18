import React from 'react';
import { useElementIds } from 'hooks/use-element-ids';

import ChopLogicErrorMessage from 'components/misc/error-message/ErrorMessage';
import { CLIcon } from 'components/misc/icon/Icon';
import InputInnerButton from 'components/misc/input-inner-button/InputInnerButton';
import ChopLogicLabel from 'components/misc/label/Label';

import { useChopLogicTextInputController } from './helpers';
import { StyledTextInput, StyledTextInputContainer, StyledTextInputWrapper } from './TextInput.styled';

export type RegExpWithFlags = {
  regexp: string;
  flags?: string;
};

export type TextValidationFunction = (input: string) => boolean;

export type ChopLogicTextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  valid?: boolean;
  errorMessage?: string;
  clearable?: boolean;
  onClear?: () => void;
  type?: 'text' | 'email' | 'password';
  validator?: RegExpWithFlags | TextValidationFunction;
};

const ChopLogicTextInput: React.FC<ChopLogicTextInputProps> = ({
  name,
  label,
  errorMessage,
  defaultValue,
  onChange,
  placeholder = 'Type here...',
  disabled = false,
  required = false,
  clearable = true,
  readOnly = false,
  autoComplete = 'off',
  type = 'text',
  validator,
  ...props
}) => {
  const { value, valid, handleChange, handleClear, passwordShown, togglePassword } = useChopLogicTextInputController({
    defaultValue,
    name,
    onChange,
    required,
    validator,
  });
  const { elementId, errorId } = useElementIds(props?.id);
  const isClearButtonVisible = clearable && type !== 'password';
  const isPasswordButtonVisible = type === 'password';

  return (
    <StyledTextInputContainer className={props?.className} style={props?.style}>
      <StyledTextInputWrapper $disabled={disabled} $invalid={!valid}>
        <ChopLogicLabel label={label} required={required} inputId={elementId} />
        <StyledTextInput
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
          maxLength={props?.maxLength}
          onBlur={props?.onBlur}
          onFocus={props?.onFocus}
          tabIndex={props?.tabIndex}
        />
        {isClearButtonVisible && <InputInnerButton onClick={handleClear} label={`Clear input for ${label}`} icon={CLIcon.Remove} />}
        {isPasswordButtonVisible && (
          <InputInnerButton
            onClick={togglePassword}
            label={'Toggle password visibility'}
            icon={passwordShown ? CLIcon.Hide : CLIcon.Show}
          />
        )}
      </StyledTextInputWrapper>
      <ChopLogicErrorMessage errorId={errorId} message={errorMessage} visible={!valid} />
    </StyledTextInputContainer>
  );
};

export default ChopLogicTextInput;
