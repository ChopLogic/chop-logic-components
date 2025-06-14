import React, { useState } from 'react';
import { ChopLogicButtonView } from '@enums';
import { ChopLogicDialogProps } from '@models';

import ChopLogicDialog from '../Dialog';
import { ChopLogicButton } from '@molecules';

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
        <ChopLogicButton text='Action' view={ChopLogicButtonView.Flat} />
        <ChopLogicButton text='Close dialog' view={ChopLogicButtonView.Flat} onClick={handleClose} />
      </div>
    </div>
  );

  return (
    <div>
      <ChopLogicButton text='Open dialog' onClick={handleOpen} view={ChopLogicButtonView.Flat} />
      <ChopLogicDialog isOpened={isOpened} onClose={handleClose} title={title}>
        {modalContent}
      </ChopLogicDialog>
    </div>
  );
};

export default Example;
