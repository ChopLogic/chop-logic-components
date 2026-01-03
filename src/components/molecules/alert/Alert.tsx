import { Button, Header, Portal } from '@components/atoms';
import { AlertMode, ButtonView, IconName } from '@enums';
import { useAutoClose, useIsMounted } from '@hooks';
import type { AlertProps } from '@types';
import { getClassName } from '@utils';
import type { FC } from 'react';

import { getAlertIcon, getAlertTitle } from './Alert.helpers';
import styles from './Alert.module.scss';

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
    <Portal>
      <div className={getClassName([styles.wrapper, { [styles.wrapper__closing]: isClosing }])}>
        <div {...rest} className={styles.content}>
          <Button
            icon={IconName.Cancel}
            view={ButtonView.Icon}
            label="Close alert popup"
            onClick={onClose}
            className={styles.content_button}
          />
          <header>
            <Header icon={alertTitleIcon} as="h3">
              {alertTitle}
            </Header>
          </header>
          <p>{message}</p>
        </div>
      </div>
    </Portal>
  );
};

export default Alert;
