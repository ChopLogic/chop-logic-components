import React, { PropsWithChildren } from 'react';
import createClassName from 'utils/create-class-name';
import './ErrorMessage.scss';

type ChopLogicErrorMessageProps = {
  errorId: string;
  visible?: boolean;
  message?: string;
  className?: string;
};

const ChopLogicErrorMessage: React.FC<PropsWithChildren<ChopLogicErrorMessageProps>> = ({
  errorId,
  message = 'Invalid input',
  className,
  visible = false,
}) => {
  return (
    <span id={errorId} className={createClassName(['cl-error-message', className, { 'cl-error-message_visible': visible }])}>
      {message}
    </span>
  );
};

export default ChopLogicErrorMessage;
