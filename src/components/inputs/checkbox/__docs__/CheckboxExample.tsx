import React from 'react';

import { ChopLogicCheckboxProps } from '@/types';

import ChopLogicCheckbox from '../Checkbox';

const Example: React.FC<ChopLogicCheckboxProps> = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ChopLogicCheckbox {...props} />
    </div>
  );
};

export default Example;
