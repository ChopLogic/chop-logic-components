import React from 'react';

import ChopLogicCheckbox, { ChopLogicCheckboxProps } from '../Checkbox';

const Example: React.FC<ChopLogicCheckboxProps> = ({
  id = 'example-checkbox',
  name = 'example',
  label = 'Accept Terms and Conditions',
  iconPosition = 'left',
  required = true,
  onChange = (e) => console.log('Checkbox state:', e.target.checked),
  disabled = false,
  isLabelHidden = false,
  defaultChecked,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <ChopLogicCheckbox
        id={id}
        name={name}
        label={label}
        required={required}
        onChange={onChange}
        disabled={disabled}
        isLabelHidden={isLabelHidden}
        iconPosition={iconPosition}
        defaultChecked={defaultChecked}
      />
    </div>
  );
};

export default Example;
