import { Button } from '@atoms';
import { ButtonView } from '@enums';
import type { DialogProps } from '@models';
import { type FC, useState } from 'react';

import Dialog from '../Dialog';

export const DialogExample: FC<DialogProps> = ({ onClose, title, ...rest }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => setIsOpened(true);
  const handleClose = () => {
    setIsOpened(false);
    if (onClose) onClose();
  };

  const modalContent = (
    <div>
      <p style={{ marginBottom: '20px' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque soluta ullam
        repudiandae facere dolore modi reiciendis doloribus tempore. Magnam veniam ducimus
        consectetur quasi vitae perferendis voluptatum quisquam numquam tempora.
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button text="Action" view={ButtonView.Secondary} />
        <Button text="Close dialog" view={ButtonView.Secondary} onClick={handleClose} />
      </div>
    </div>
  );

  return (
    <div>
      <Button text="Open dialog" onClick={handleOpen} view={ButtonView.Secondary} />
      <Dialog {...rest} isOpened={isOpened} onClose={handleClose} title={title}>
        {modalContent}
      </Dialog>
    </div>
  );
};
