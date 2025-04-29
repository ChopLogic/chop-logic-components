import React from 'react';
import { ChopLogicTheme } from '@models';
import { getClassName } from '@utils/get-class-name.ts';
import styles from './ErrorMessage.module.scss';

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
}) => {
  return (
    <span
      id={errorId}
      className={getClassName([styles.errorMessage, { [styles.errorMessage__visible]: visible }])}
      data-testid={testId}
      style={style}
      aria-hidden={!visible}
    >
      {message}
    </span>
  );
};

export default ChopLogicErrorMessage;
