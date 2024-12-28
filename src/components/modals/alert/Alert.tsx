import React from 'react';

import { ChopLogicPortal } from '@/components';
import { ChopLogicAlertMode } from '@/enums';
import { useChopLogicTheme, useMount } from '@/hooks';
import { ChopLogicAlertProps } from '@/models';

import ChopLogicAlertHeader from './elements/Header';
import { StyledAlertContent, StyledAlertWrapper } from './Alert.styled';

const ChopLogicAlert: React.FC<ChopLogicAlertProps> = ({
  isOpened,
  onClose,
  title,
  message,
  mode = ChopLogicAlertMode.Info,
  icon,
  ...rest
}) => {
  const isMounted = useMount(isOpened);
  const isClosing = isMounted && !isOpened;
  const theme = useChopLogicTheme();

  if (!isMounted) return null;

  return (
    <ChopLogicPortal>
      <StyledAlertWrapper $isClosing={isClosing} $theme={theme}>
        <StyledAlertContent {...rest} $theme={theme}>
          <ChopLogicAlertHeader title={title} onClose={onClose} mode={mode} icon={icon} theme={theme} />
          <p>{message}</p>
        </StyledAlertContent>
      </StyledAlertWrapper>
    </ChopLogicPortal>
  );
};

export default ChopLogicAlert;
