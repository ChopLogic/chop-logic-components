import React from 'react';
import { useMount } from 'hooks/use-mount';
import { ThemeProvider } from 'styled-components';
import { getChopLogicTheme } from 'utils/get-chop-logic-theme.ts';

import ChopLogicPortal from 'components/containers/portal';

import ChopLogicAlertHeader from './elements/Header';
import { StyledAlertContent, StyledAlertWrapper } from './Alert.styled';
import { ChopLogicAlertProps } from './types';

const ChopLogicAlert: React.FC<ChopLogicAlertProps> = ({ isOpened, onClose, title, message, mode = 'info', icon, theme, ...rest }) => {
  const isMounted = useMount(isOpened);
  const isClosing = isMounted && !isOpened;
  const themeValues = getChopLogicTheme(theme);

  if (!isMounted) return null;

  return (
    <ChopLogicPortal>
      <ThemeProvider theme={themeValues}>
        <StyledAlertWrapper $isClosing={isClosing}>
          <StyledAlertContent {...rest}>
            <ChopLogicAlertHeader title={title} onClose={onClose} mode={mode} icon={icon} />
            <p>{message}</p>
          </StyledAlertContent>
        </StyledAlertWrapper>
      </ThemeProvider>
    </ChopLogicPortal>
  );
};

export default ChopLogicAlert;
