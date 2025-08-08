import { ChopLogicButton } from '@atoms';
import { ChopLogicButtonView } from '@enums';
import { ChopLogicAlertProps } from '@models';
import { FC, useState } from 'react';

import ChopLogicAlert from '../Alert';

export const AlertExample: FC<ChopLogicAlertProps> = ({ mode, message, title, ...rest }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => setIsOpened(true);
  const handleClose = () => setIsOpened(false);

  return (
    <div>
      <ChopLogicButton onClick={handleOpen} text='Open Alert' view={ChopLogicButtonView.Secondary} />
      <ChopLogicAlert title={title} message={message} mode={mode} {...rest} isOpened={isOpened} onClose={handleClose} />
    </div>
  );
};
