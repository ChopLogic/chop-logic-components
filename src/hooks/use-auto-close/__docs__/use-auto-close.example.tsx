import { Button } from '@atoms';
import { ButtonView } from '@enums';
import { useAutoClose } from '@hooks';
import { Dialog } from '@organisms';
import { type FC, useState } from 'react';

export const UseAutoCloseExample: FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => setIsOpened(true);
  const handleClose = () => {
    setIsOpened(false);
  };

  useAutoClose({
    isOpened: isOpened,
    onClose: handleClose,
    autoCloseDelay: 2000,
  });

  const modalContent = (
    <div>
      <p style={{ marginBottom: '20px' }}>This popup will be closed after 2 seconds...</p>
    </div>
  );

  return (
    <div>
      <Button text="Open dialog" onClick={handleOpen} view={ButtonView.Secondary} />
      <Dialog isOpened={isOpened} onClose={handleClose} title="Autoclosing Dialog">
        {modalContent}
      </Dialog>
    </div>
  );
};
