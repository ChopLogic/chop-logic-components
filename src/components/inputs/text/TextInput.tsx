import React, { useRef } from 'react';

import ClearInputButton from 'components/misc/clear-input-button/ClearInputButton';
import ChopLogicErrorMessage from 'components/misc/error-message/ErrorMessage';
import ChopLogicLabel from 'components/misc/label/Label';

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
  disabled = false,
  valid = true,
  required = false,
  hasClearButton = true,
  ...props
}) => {
  const errorId = `${id}_error`;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    if (inputRef?.current?.value) {
      inputRef.current.value = '';
    }
    if (props?.onClear) props.onClear();
  };

  return (
    <StyledTextInputContainer className={props?.className} style={props?.style}>
      <StyledTextInputWrapper $disabled={disabled} $invalid={!valid}>
        <ChopLogicLabel label={label} required={required} inputId={id} />
        <StyledTextInput
          id={id}
          ref={inputRef}
          name={name}
          type='text'
          disabled={disabled}
          placeholder={placeholder}
          required={required}
          aria-invalid={!valid}
          aria-errormessage={errorId}
          value={props?.value}
          readOnly={props?.readOnly}
          maxLength={props?.maxLength}
          pattern={props?.pattern}
          defaultValue={props?.defaultValue}
          onChange={props?.onChange}
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
