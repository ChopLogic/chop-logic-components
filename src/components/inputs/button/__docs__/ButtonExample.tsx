import React from 'react';

import { ChopLogicButtonProps } from '@/types';

import Button from '../Button';

const ExampleButton: React.FC<ChopLogicButtonProps> = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
      }}
    >
      <Button {...props} />
    </div>
  );
};

export default ExampleButton;
