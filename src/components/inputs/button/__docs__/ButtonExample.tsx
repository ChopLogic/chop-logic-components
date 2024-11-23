import React from 'react';

import Button from '../Button';
import { ChopLogicButtonProps } from '../types';

const ExampleButton: React.FC<ChopLogicButtonProps> = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button {...props} />
    </div>
  );
};

export default ExampleButton;
