import React, { useState } from 'react';

import ChopLogicErrorMessage from 'components/misc/error-message/ErrorMessage';
import ChopLogicLabel from 'components/misc/label/Label';

import { StyledTextInput, StyledTextInputContainer, StyledTextInputWrapper } from './TextInput.styled';

export type ChopLogicTextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  name: string;
  label: string;
  valid?: boolean;
  errorMessage?: string;
};

const TextInput: React.FC<ChopLogicTextInputProps> = ({
  id,
  name,
  label,
  errorMessage,
  defaultValue,
  onChange,
  placeholder = 'Type here...',
  disabled = false,
  valid = true,
  required = false,
  ...props
}) => {
  const [inputValue, setInputValue] = useState<string>(typeof defaultValue === 'string' ? defaultValue : '');
  const errorId = `${id}_error`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value = '' } = e.target;
    setInputValue(value);
    if (onChange) onChange(e);
  };

  return (
    <StyledTextInputContainer className={props?.className}>
      <StyledTextInputWrapper $disabled={disabled} $invalid={!valid}>
        <ChopLogicLabel label={label} required={required} inputId={id} />
        <StyledTextInput
          id={id}
          name={name}
          type='text'
          disabled={disabled}
          placeholder={placeholder}
          required={required}
          aria-invalid={!valid}
          aria-errormessage={errorId}
          value={inputValue}
          onChange={handleChange}
          {...props}
        />
      </StyledTextInputWrapper>
      <ChopLogicErrorMessage errorId={errorId} message={errorMessage} visible={!valid} />
    </StyledTextInputContainer>
  );
};

export default TextInput;
