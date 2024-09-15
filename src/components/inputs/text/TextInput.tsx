import React from 'react';
import { useElementIds } from 'hooks/use-element-id';

import ClearInputButton from 'components/misc/clear-input-button/ClearInputButton';
import ChopLogicErrorMessage from 'components/misc/error-message/ErrorMessage';
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
  hasClearButton?: boolean;
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
  hasClearButton = true,
  autoComplete = 'off',
  type = 'text',
  validator,
  ...props
}) => {
  const { elementId, errorId } = useElementIds(props?.id);
  const { value, valid, handleChange, handleClear } = useChopLogicTextInputController({
    defaultValue,
    name,
    onChange,
    required,
    validator,
  });

  return (
    <StyledTextInputContainer className={props?.className} style={props?.style}>
      <StyledTextInputWrapper $disabled={disabled} $invalid={!valid}>
        <ChopLogicLabel label={label} required={required} inputId={elementId} />
        <StyledTextInput
          id={elementId}
          name={name}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          aria-invalid={!valid}
          aria-errormessage={errorId}
          value={value}
          onChange={handleChange}
          readOnly={props?.readOnly}
          maxLength={props?.maxLength}
          pattern={props?.pattern}
          onBlur={props?.onBlur}
          onFocus={props?.onFocus}
        />
        {hasClearButton && <ClearInputButton onClear={handleClear} label={label} />}
      </StyledTextInputWrapper>
      <ChopLogicErrorMessage errorId={errorId} message={errorMessage} visible={!valid} />
    </StyledTextInputContainer>
  );
};

export default ChopLogicTextInput;
