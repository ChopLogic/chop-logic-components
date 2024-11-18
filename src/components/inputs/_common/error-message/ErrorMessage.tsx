import React from 'react';

import { StyledErrorMessage } from './ErrorMessage.styled';

type ChopLogicErrorMessageProps = {
  errorId: string;
  visible?: boolean;
  message?: string;
  testId?: string;
  style?: React.CSSProperties;
};

const ChopLogicErrorMessage: React.FC<ChopLogicErrorMessageProps> = ({
  errorId,
  testId,
  message = 'Invalid input',
  visible = false,
  style,
}) => {
  return (
    <StyledErrorMessage id={errorId} $visible={visible} data-testid={testId} style={style}>
      {message}
    </StyledErrorMessage>
  );
};

export default ChopLogicErrorMessage;
