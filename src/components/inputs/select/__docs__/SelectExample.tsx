import React from 'react';

import ChopLogicSelect, { ChopLogicSelectProps } from '../Select';

const Example: React.FC<ChopLogicSelectProps> = ({ id, values, onSelectChange, name, placeholder, label, required, disabled }) => {
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
      <ChopLogicSelect
        id={id}
        values={values}
        onSelectChange={onSelectChange}
        name={name}
        placeholder={placeholder}
        label={label}
        required={required}
        disabled={disabled}
        style={{ width: '180px' }}
      />
    </div>
  );
};

export default Example;
