import React from 'react';

import ChopLogicMultiSelect from '../MultiSelect';
import { ChopLogicMultiSelectProps } from '../types';

const Example: React.FC<ChopLogicMultiSelectProps> = (props) => {
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
      <ChopLogicMultiSelect {...props} style={{ width: '240px' }} />
    </div>
  );
};

export default Example;
