import React, { PropsWithChildren } from 'react';

import { StyledErrorMessage } from './ErrorMessage.styled';

type ChopLogicErrorMessageProps = {
  errorId: string;
  visible?: boolean;
  message?: string;
  className?: string;
  testId?: string;
};

const ChopLogicErrorMessage: React.FC<PropsWithChildren<ChopLogicErrorMessageProps>> = ({
  errorId,
  className,
  testId,
  message = 'Invalid input',
  visible = false,
}) => {
  return (
    <StyledErrorMessage id={errorId} $visible={visible} className={className} data-testid={testId}>
      {message}
    </StyledErrorMessage>
  );
};

export default ChopLogicErrorMessage;
