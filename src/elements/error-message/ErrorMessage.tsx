import React from 'react';

import { ChopLogicTheme } from '@/models';

import { StyledErrorMessage } from './ErrorMessage.styled';

type ChopLogicErrorMessageProps = {
  errorId: string;
  visible?: boolean;
  message?: string;
  testId?: string;
  style?: React.CSSProperties;
  theme: ChopLogicTheme;
};

const ChopLogicErrorMessage: React.FC<ChopLogicErrorMessageProps> = ({
  errorId,
  testId,
  message = 'Invalid input',
  visible = false,
  style,
  theme,
}) => {
  return (
    <StyledErrorMessage id={errorId} $visible={visible} data-testid={testId} style={style} $theme={theme} aria-hidden={!visible}>
      {message}
    </StyledErrorMessage>
  );
};

export default ChopLogicErrorMessage;
