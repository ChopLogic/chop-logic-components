import React from 'react';

import ClearInputButton from 'components/misc/clear-input-button/ClearInputButton';
import ChopLogicErrorMessage from 'components/misc/error-message/ErrorMessage';
import ChopLogicLabel from 'components/misc/label/Label';

import { useTextInputController } from './helpers';
import { StyledTextInput, StyledTextInputContainer, StyledTextInputWrapper } from './TextInput.styled';

export type ChopLogicTextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  name: string;
  label: string;
  valid?: boolean;
  errorMessage?: string;
  hasClearButton?: boolean;
  onClear?: () => void;
};

const TextInput: React.FC<ChopLogicTextInputProps> = ({
  id,
  name,
  label,
  errorMessage,
  placeholder = 'Type here...',
  defaultValue,
  onChange,
  disabled = false,
  valid = true,
  required = false,
  hasClearButton = true,
  autoComplete = 'off',
  ...props
}) => {
  const errorId = `${id}_error`;
  const { value, handleChange, handleClear } = useTextInputController({ defaultValue, name, onChange });

  return (
    <StyledTextInputContainer className={props?.className} style={props?.style}>
      <StyledTextInputWrapper $disabled={disabled} $invalid={!valid}>
        <ChopLogicLabel label={label} required={required} inputId={id} />
        <StyledTextInput
          id={id}
          name={name}
          type='text'
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

export default TextInput;
