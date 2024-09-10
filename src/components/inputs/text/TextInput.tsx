import React from 'react';
import { useElementIds } from 'hooks/use-element-id';

import ClearInputButton from 'components/misc/clear-input-button/ClearInputButton';
import ChopLogicErrorMessage from 'components/misc/error-message/ErrorMessage';
import ChopLogicLabel from 'components/misc/label/Label';

import { useTextInputController } from './helpers';
import { StyledTextInput, StyledTextInputContainer, StyledTextInputWrapper } from './TextInput.styled';

export type ChopLogicTextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  valid?: boolean;
  errorMessage?: string;
  hasClearButton?: boolean;
  onClear?: () => void;
};

const TextInput: React.FC<ChopLogicTextInputProps> = ({
  name,
  label,
  errorMessage,
  defaultValue,
  onChange,
  placeholder = 'Type here...',
  disabled = false,
  valid = true,
  required = false,
  hasClearButton = true,
  autoComplete = 'off',
  ...props
}) => {
  const { elementId, errorId } = useElementIds(props?.id);
  const { value, handleChange, handleClear } = useTextInputController({ defaultValue, name, onChange });

  return (
    <StyledTextInputContainer className={props?.className} style={props?.style}>
      <StyledTextInputWrapper $disabled={disabled} $invalid={!valid}>
        <ChopLogicLabel label={label} required={required} inputId={elementId} />
        <StyledTextInput
          id={elementId}
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
