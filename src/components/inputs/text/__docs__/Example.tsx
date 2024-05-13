import React from 'react';
import TextInput, { ChopLogicTextInputProps } from '../TextInput';

const Example: React.FC<ChopLogicTextInputProps> = ({
  disabled,
  placeholder = 'Type here...',
  label = 'Input',
  valid = true,
  required = false,
}) => {
  return (
    <div>
      <TextInput placeholder={placeholder} label={label} valid={valid} required={required} disabled={disabled} />
    </div>
  );
};

export default Example;
