import React from 'react';

import ChopLogicCheckbox, { ChopLogicCheckboxProps } from '../Checkbox';

const Example: React.FC<ChopLogicCheckboxProps> = ({
  id = 'example-checkbox',
  name = 'example',
  label,
  iconPosition,
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
