import React from 'react';

import ChopLogicCheckbox from '../Checkbox';
import { ChopLogicCheckboxProps } from '../types';

const Example: React.FC<ChopLogicCheckboxProps> = ({
  id = 'example-checkbox',
  name = 'example',
  label,
  iconPosition,
  required = true,
  onChange = (e) => console.log('Checkbox state:', e.target.checked),
  disabled = false,
  noLabel = false,
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
        noLabel={noLabel}
        iconPosition={iconPosition}
        defaultChecked={defaultChecked}
      />
    </div>
  );
};

export default Example;
