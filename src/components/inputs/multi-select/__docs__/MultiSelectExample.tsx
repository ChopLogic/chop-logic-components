import React from 'react';

import ChopLogicMultiSelect, { ChopLogicMultiSelectProps } from '../MultiSelect';

const Example: React.FC<ChopLogicMultiSelectProps> = ({ id, name, label, options, placeholder, required, disabled, onChange }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        padding: '20px',
      }}
    >
      <ChopLogicMultiSelect
        id={id}
        name={name}
        label={label}
        options={options}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        onChange={onChange}
        style={{ width: '240px' }}
      />
    </div>
  );
};

export default Example;
