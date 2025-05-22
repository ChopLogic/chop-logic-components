import { default as React } from '../../../node_modules/react';

type ErrorMessageProps = {
  errorId: string;
  visible?: boolean;
  message?: string;
  testId?: string;
  style?: React.CSSProperties;
};
declare const ErrorMessage: React.FC<ErrorMessageProps>;
export default ErrorMessage;
