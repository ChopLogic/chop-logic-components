import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import createClassName from 'utils/create-class-name';

type ChopLogicErrorMessageProps = {
  errorId: string;
  visible?: boolean;
  message?: string;
  className?: string;
};

const StyledErrorMessage = styled.span<{ $visible: boolean }>`
  font-size: 0.8rem;
  font-family: 'Cyrge', Helvetica, sans-serif;
  color: #e53d00;
  visibility: ${(props) => (props.$visible ? 'visible' : 'hidden')};
`;

const ChopLogicErrorMessage: React.FC<PropsWithChildren<ChopLogicErrorMessageProps>> = ({
  errorId,
  message = 'Invalid input',
  className,
  visible = false,
}) => {
  return (
    <StyledErrorMessage
      id={errorId}
      $visible={visible}
      className={createClassName(['cl-error-message', className, { 'cl-error-message_visible': visible }])}
    >
      {message}
    </StyledErrorMessage>
  );
};

export default ChopLogicErrorMessage;
