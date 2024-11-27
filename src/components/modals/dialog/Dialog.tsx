import React from 'react';
import { useMount } from 'hooks/use-mount';
import { ThemeProvider } from 'styled-components';
import { getChopLogicTheme } from 'utils/get-chop-logic-theme.ts';

import ChopLogicPortal from 'components/containers/portal';

import ChopLogicModalLayout from './elements/Layout';
import { StyledDialogBackground } from './Dialog.styled';
import { ChopLogicDialogProps } from './types';

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
