import React from 'react';
import { ChopLogicPortal } from '@components';
import { useChopLogicTheme, useMount } from '@hooks';
import { ChopLogicDialogProps } from '@models';

import ChopLogicModalLayout from './elements/Layout';
import { StyledDialogBackground } from './Dialog.styled';

const ChopLogicDialog: React.FC<ChopLogicDialogProps> = ({ isOpened, onClose, title, children, ...rest }) => {
  const isMounted = useMount(isOpened);
  const isClosing = isMounted && !isOpened;
  const theme = useChopLogicTheme();

  if (!isMounted) {
    return null;
  }

  return (
    <ChopLogicPortal>
      <StyledDialogBackground $isClosing={isClosing} $theme={theme}>
        <ChopLogicModalLayout title={title} onClose={onClose} isOpened={isOpened} {...rest} theme={theme}>
          {children}
        </ChopLogicModalLayout>
      </StyledDialogBackground>
    </ChopLogicPortal>
  );
};

export default ChopLogicDialog;
