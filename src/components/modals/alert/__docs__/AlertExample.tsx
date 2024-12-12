import React, { useState } from 'react';

import { ChopLogicButton } from '@/components';
import { ChopLogicAlertProps } from '@/types';

import ChopLogicAlert from '../Alert';

const Example: React.FC<ChopLogicAlertProps> = ({ mode, message, title }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => setIsOpened(true);
  const handleClose = () => setIsOpened(false);

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
      <ChopLogicButton onClick={handleOpen} text='Open Alert' />
      <ChopLogicAlert isOpened={isOpened} onClose={handleClose} title={title} message={message} mode={mode} />
    </div>
  );
};

export default Example;
