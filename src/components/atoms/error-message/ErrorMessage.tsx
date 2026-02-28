import { getClassName } from '@utils/get-class-name';
import type { FC } from 'react';
import './ErrorMessage.css';

type ErrorMessageProps = {
  errorId: string;
  visible?: boolean;
  message?: string;
  testId?: string;
  className?: string;
};

const ErrorMessage: FC<ErrorMessageProps> = ({
  errorId,
  testId,
  message = 'Error!',
  visible = false,
  className,
}) => {
  const errorClass = getClassName([
    'cl-error-message',
    className,
    { 'cl-error-message_visible': visible },
  ]);

  return (
    <span
      id={errorId}
      className={errorClass}
      data-testid={testId}
      aria-hidden={!visible}
      aria-live="polite"
    >
      {message}
    </span>
  );
};

export default ErrorMessage;
