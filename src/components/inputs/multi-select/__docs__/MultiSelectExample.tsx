import React from 'react';

import ChopLogicMultiSelect from '../MultiSelect';
import { ChopLogicMultiSelectProps } from '../types';

const Example: React.FC<ChopLogicMultiSelectProps> = ({ id, name, label, values, placeholder, required, disabled, onSelectChange }) => {
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
        values={values}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        onSelectChange={onSelectChange}
        style={{ width: '180px' }}
      />
    </div>
  );
};

export default Example;
