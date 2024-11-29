import React from 'react';
import { ThemeProvider } from 'styled-components';

import { ChopLogicPortal } from '@/components';
import { ChopLogicAlertMode } from '@/enums';
import { useMount } from '@/hooks';
import { ChopLogicAlertProps } from '@/types';
import { getChopLogicTheme } from '@/utils';

import ChopLogicAlertHeader from './elements/Header';
import { StyledAlertContent, StyledAlertWrapper } from './Alert.styled';

const ChopLogicAlert: React.FC<ChopLogicAlertProps> = ({
  isOpened,
  onClose,
  title,
  message,
  mode = ChopLogicAlertMode.Info,
  icon,
  theme,
  ...rest
}) => {
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
