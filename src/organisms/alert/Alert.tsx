import { ChopLogicHeader, ChopLogicPortal } from '@atoms';
import { ChopLogicAlertMode, ChopLogicButtonView, ChopLogicIconName } from '@enums';
import { useAutoClose, useIsMounted } from '@hooks';
import { ChopLogicAlertProps } from '@models';
import { ChopLogicButton } from '@molecules';
import { getClassName } from '@utils';
import React from 'react';

import { getAlertIcon, getAlertTitle } from './Alert.helpers.tsx';
import styles from './Alert.module.scss';

const ChopLogicAlert: React.FC<ChopLogicAlertProps> = ({
  isOpened,
  onClose,
  title,
  message,
  mode = ChopLogicAlertMode.Info,
  icon,
  autoClose = false,
  autoCloseDelay = 3000,
  ...rest
}) => {
  const isMounted = useIsMounted(isOpened);
  const isClosing = isMounted && !isOpened;

  useAutoClose({
    isOpened,
    onClose,
    autoClose,
    autoCloseDelay,
  });

  if (!isMounted) return null;

  const alertTitle = getAlertTitle(mode, title);
  const alertTitleIcon = getAlertIcon(mode, icon);

  return (
    <ChopLogicPortal>
      <div className={getClassName([styles.wrapper, { [styles.wrapper__closing]: isClosing }])}>
        <div {...rest} className={styles.content}>
          <ChopLogicButton
            icon={ChopLogicIconName.Cancel}
            view={ChopLogicButtonView.Icon}
            label='Close alert popup'
            onClick={onClose}
            className={styles.content_button}
          />
          <header>
            <ChopLogicHeader icon={alertTitleIcon} as='h3'>
              {alertTitle}
            </ChopLogicHeader>
          </header>
          <p>{message}</p>
        </div>
      </div>
    </ChopLogicPortal>
  );
};

export default ChopLogicAlert;
