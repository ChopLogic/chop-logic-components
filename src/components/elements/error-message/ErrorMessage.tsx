import React, { PropsWithChildren } from 'react';
import styles from './styles.module.css';
import createClassName from 'utils/create-class-name';
import 'styles';

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
    <span id={errorId} className={createClassName([styles.message, className, { [styles.visible]: visible }])}>
      {message}
    </span>
  );
};

export default ChopLogicErrorMessage;
