import { ChopLogicButtonView } from '@enums';
import { ChopLogicDialogProps } from '@models';
import { ChopLogicButton } from '@molecules';
import { FC, useState } from 'react';

import ChopLogicDialog from '../Dialog';

export const ChopLogicDialogExample: FC<ChopLogicDialogProps> = ({ onClose, title, ...rest }) => {
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
        <ChopLogicButton text='Action' view={ChopLogicButtonView.Secondary} />
        <ChopLogicButton text='Close dialog' view={ChopLogicButtonView.Secondary} onClick={handleClose} />
      </div>
    </div>
  );

  return (
    <div>
      <ChopLogicButton text='Open dialog' onClick={handleOpen} view={ChopLogicButtonView.Secondary} />
      <ChopLogicDialog {...rest} isOpened={isOpened} onClose={handleClose} title={title}>
        {modalContent}
      </ChopLogicDialog>
    </div>
  );
};
