import React from 'react';

import ChopLogicCheckbox from '../Checkbox';
import { ChopLogicCheckboxProps } from '../types';

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
