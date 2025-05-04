import React from 'react';
import { ChopLogicPortal } from '@components';
import { ChopLogicAlertMode } from '@enums';
import { useMount } from '@hooks';
import { ChopLogicAlertProps } from '@models';
import AlertHeader from './elements/AlertHeader.tsx';
import styles from './Alert.module.scss';
import { getClassName } from '@utils';

const ChopLogicAlert: React.FC<ChopLogicAlertProps> = ({
  isOpened,
  onClose,
  title,
  message,
  mode = ChopLogicAlertMode.Info,
  icon,
  ...rest
}) => {
  const isMounted = useMount(isOpened);
  const isClosing = isMounted && !isOpened;

  if (!isMounted) return null;

  return (
    <ChopLogicPortal>
      <div className={getClassName([styles.wrapper, { [styles.wrapper__closing]: isClosing }])}>
        <div {...rest} className={styles.content}>
          <AlertHeader title={title} onClose={onClose} mode={mode} icon={icon} />
          <p>{message}</p>
        </div>
      </div>
    </ChopLogicPortal>
  );
};

export default ChopLogicAlert;
