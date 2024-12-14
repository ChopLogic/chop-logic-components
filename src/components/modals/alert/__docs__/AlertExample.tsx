import React, { useState } from 'react';

import { ChopLogicButton } from '@/components';
import { ChopLogicAlertProps } from '@/types';

import ChopLogicAlert from '../Alert';

const Example: React.FC<ChopLogicAlertProps> = ({ mode, message, title }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => setIsOpened(true);
  const handleClose = () => setIsOpened(false);

  return (
    <div>
      <ChopLogicButton onClick={handleOpen} text='Open Alert' view='flat' />
      <ChopLogicAlert isOpened={isOpened} onClose={handleClose} title={title} message={message} mode={mode} />
    </div>
  );
};

export default Example;
