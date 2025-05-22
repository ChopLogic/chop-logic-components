import React from 'react';
import { getClassName } from '@utils/get-class-name.ts';
import styles from './ErrorMessage.module.scss';

type ErrorMessageProps = {
  errorId: string;
  visible?: boolean;
  message?: string;
  testId?: string;
  className?: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorId, testId, message = 'Error!', visible = false, className }) => {
  const errorClass = getClassName([styles.errorMessage, className, { [styles.errorMessage__visible]: visible }]);

  return (
    <span id={errorId} className={errorClass} data-testid={testId} aria-hidden={!visible}>
      {message}
    </span>
  );
};

export default ErrorMessage;
