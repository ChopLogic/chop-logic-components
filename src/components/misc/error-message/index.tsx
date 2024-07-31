import React, { PropsWithChildren } from 'react';
import { COLORS, FONTS } from 'constants/style-variables';
import styled from 'styled-components';

type ChopLogicErrorMessageProps = {
  errorId: string;
  visible?: boolean;
  message?: string;
  className?: string;
  testId?: string;
};

export const StyledErrorMessage = styled.span<{ $visible: boolean }>`
  font-size: 0.8rem;
  font-family: ${FONTS.core};
  color: ${COLORS.accent};
  visibility: ${(props) => (props.$visible ? 'visible' : 'hidden')};
`;

const ChopLogicErrorMessage: React.FC<PropsWithChildren<ChopLogicErrorMessageProps>> = ({
  errorId,
  message = 'Invalid input',
  className,
  visible = false,
  testId,
}) => {
  return (
    <StyledErrorMessage id={errorId} $visible={visible} className={className} data-testid={testId}>
      {message}
    </StyledErrorMessage>
  );
};

export default ChopLogicErrorMessage;
