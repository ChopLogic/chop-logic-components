import React from 'react';
import ChopLogicSelect, { ChopLogicSelectProps } from '../Select';

const Example: React.FC<ChopLogicSelectProps> = ({ id, values, onSelect }) => {
  return (
    <div>
      <ChopLogicSelect id={id} values={values} onSelect={onSelect} />
    </div>
  );
};

export default Example;
