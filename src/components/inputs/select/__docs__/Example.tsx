import React from 'react';
import ChopLogicSelect, { ChopLogicSelectProps } from '../Select';

const Example: React.FC<ChopLogicSelectProps> = ({ id, values, onSelect, name, placeholder, label }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        padding: '20px',
      }}
    >
      <ChopLogicSelect id={id} values={values} onSelect={onSelect} name={name} placeholder={placeholder} label={label} />
    </div>
  );
};

export default Example;
