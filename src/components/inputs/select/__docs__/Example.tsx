import React from 'react';
import ChopLogicSelect, { ChopLogicSelectProps } from '../Select';

const Example: React.FC<ChopLogicSelectProps> = ({ id = 'example-select', className = 'custom-class' }) => {
  return (
    <div>
      <ChopLogicSelect id={id} className={className} />
    </div>
  );
};

export default Example;
