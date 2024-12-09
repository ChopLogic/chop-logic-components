import React, { useState } from 'react';

import { ChopLogicButton } from '@/components';
import { ChopLogicDialogProps } from '@/types';

import ChopLogicDialog from '../Dialog';

const Example: React.FC<ChopLogicDialogProps> = ({ onClose, title }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => setIsOpened(true);
  const handleClose = () => {
    setIsOpened(false);
    if (onClose) onClose();
  };

  const modalContent = (
    <div>
      <p style={{ marginBottom: '20px' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque soluta ullam repudiandae facere dolore modi reiciendis
        doloribus tempore. Magnam veniam ducimus consectetur quasi vitae perferendis voluptatum quisquam numquam tempora.
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ChopLogicButton text='Action' view='flat' />
        <ChopLogicButton text='Close dialog' view='flat' onClick={handleClose} />
      </div>
    </div>
  );

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        padding: '20px',
      }}
    >
      <ChopLogicButton text='Open dialog' onClick={handleOpen} />
      <ChopLogicDialog isOpened={isOpened} onClose={handleClose} title={title}>
        {modalContent}
      </ChopLogicDialog>
    </div>
  );
};

export default Example;
