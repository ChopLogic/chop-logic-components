import React from 'react';

import { ChopLogicSelectProps } from '@/types';

import ChopLogicSelect from '../Select';

const Example: React.FC<ChopLogicSelectProps> = (props) => {
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
      <ChopLogicSelect {...props} style={{ width: '240px' }} />
    </div>
  );
};

export default Example;
