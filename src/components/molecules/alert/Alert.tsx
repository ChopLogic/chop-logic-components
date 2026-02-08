import { Button, Header, Portal } from '@components/atoms';
import { AlertMode, ButtonView, IconName } from '@enums';
import { useIsHovered, useIsMounted, useRemainingTimer } from '@hooks';
import type { AlertProps } from '@types';
import { getClassName } from '@utils';
import { type FC, useRef } from 'react';

import { getAlertIcon, getAlertTitle } from './Alert.helpers';
import styles from './Alert.module.scss';
import { AlertProgressBar } from './AlertProgressBar';

const Alert: FC<AlertProps> = ({
  isOpened,
  onClose,
  title,
  message,
  mode = AlertMode.Info,
  icon,
  autoClose = false,
  autoCloseDelay = 3000,
  ...rest
}) => {
  const isMounted = useIsMounted(isOpened);
  const isClosing = isMounted && !isOpened;
  const containerRef = useRef<HTMLDivElement>(null);
  const isHovered = useIsHovered(containerRef, isMounted);
  const isCloseButtonVisible = !autoClose;

  const remainingPercentage = useRemainingTimer({
    isOpened: isMounted,
    isHovered,
    onClose,
    autoCloseDelay,
  });

  if (!isMounted) return null;

  const alertTitle = getAlertTitle(mode, title);
  const alertTitleIcon = getAlertIcon(mode, icon);

  return (
    <Portal>
      <div
        ref={containerRef}
        className={getClassName([styles.wrapper, { [styles.wrapper__closing]: isClosing }])}
      >
        <div {...rest} className={styles.content}>
          {isCloseButtonVisible && (
            <Button
              icon={IconName.X}
              view={ButtonView.Icon}
              label="Close alert"
              onClick={onClose}
              className={styles.content_button}
            />
          )}
          <header>
            <Header icon={alertTitleIcon} as="h3">
              {alertTitle}
            </Header>
          </header>
          <p>{message}</p>
          {autoClose && <AlertProgressBar remainingPercentage={remainingPercentage} />}
        </div>
      </div>
    </Portal>
  );
};

export default Alert;
