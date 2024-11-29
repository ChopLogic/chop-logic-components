import React from 'react';
import { ThemeProvider } from 'styled-components';

import { ChopLogicPortal } from '@/components';
import { useMount } from '@/hooks';
import { ChopLogicDialogProps } from '@/types';
import { getChopLogicTheme } from '@/utils';

import ChopLogicModalLayout from './elements/Layout';
import { StyledDialogBackground } from './Dialog.styled';

const ChopLogicDialog: React.FC<ChopLogicDialogProps> = ({ isOpened, onClose, title, children, theme, ...rest }) => {
  const isMounted = useMount(isOpened);
  const isClosing = isMounted && !isOpened;
  const themeValues = getChopLogicTheme(theme);

  if (!isMounted) {
    return null;
  }

  return (
    <ChopLogicPortal>
      <ThemeProvider theme={themeValues}>
        <StyledDialogBackground $isClosing={isClosing}>
          <ChopLogicModalLayout title={title} onClose={onClose} isOpened={isOpened} {...rest}>
            {children}
          </ChopLogicModalLayout>
        </StyledDialogBackground>
      </ThemeProvider>
    </ChopLogicPortal>
  );
};

export default ChopLogicDialog;
