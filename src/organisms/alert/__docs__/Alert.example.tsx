import { Button } from '@atoms';
import { ButtonView } from '@enums';
import { AlertProps } from '@models';
import { FC, useState } from 'react';

import Alert from '../Alert';

export const AlertExample: FC<AlertProps> = ({ mode, message, title, ...rest }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => setIsOpened(true);
  const handleClose = () => setIsOpened(false);

  return (
    <div>
      <Button onClick={handleOpen} text='Trigger Alert' view={ButtonView.Secondary} />
      <Alert title={title} message={message} mode={mode} {...rest} isOpened={isOpened} onClose={handleClose} />
    </div>
  );
};
