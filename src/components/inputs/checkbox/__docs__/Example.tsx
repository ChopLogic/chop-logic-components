import React from 'react';
import Checkbox, { ChopLogicCheckboxProps } from '../Checkbox';

const Example: React.FC<ChopLogicCheckboxProps> = ({
  id = 'example-checkbox',
  name = 'example',
  label = 'Accept Terms and Conditions',
  required = true,
  onChange = (e) => console.log('Checkbox state:', e.target.checked),
  disabled = false,
  isLabelHidden = false,
  labelPosition = 'right',
}) => {
  return (
    <div>
      <Checkbox
        id={id}
        name={name}
        label={label}
        required={required}
        onChange={onChange}
        disabled={disabled}
        isLabelHidden={isLabelHidden}
        labelPosition={labelPosition}
      />
    </div>
  );
};

export default Example;
