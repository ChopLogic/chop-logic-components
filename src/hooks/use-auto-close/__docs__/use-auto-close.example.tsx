import { ChopLogicButton } from '@atoms';
import { ChopLogicButtonView } from '@enums';
import { useAutoClose } from '@hooks';
import { ChopLogicDialog } from '@organisms';
import { FC, useState } from 'react';

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
      <ChopLogicButton text='Open dialog' onClick={handleOpen} view={ChopLogicButtonView.Secondary} />
      <ChopLogicDialog isOpened={isOpened} onClose={handleClose} title='Autoclosing Dialog'>
        {modalContent}
      </ChopLogicDialog>
    </div>
  );
};
