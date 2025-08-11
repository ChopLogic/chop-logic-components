import { ChopLogicHeader, ChopLogicPortal } from '@atoms';
import { ChopLogicButton } from '@atoms';
import { AlertMode, ButtonView, IconName } from '@enums';
import { useAutoClose, useIsMounted } from '@hooks';
import { ChopLogicAlertProps } from '@models';
import { getClassName } from '@utils';
import { FC } from 'react';

import { getAlertIcon, getAlertTitle } from './Alert.helpers.tsx';
import styles from './Alert.module.scss';

const ChopLogicAlert: FC<ChopLogicAlertProps> = ({
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
    <ChopLogicPortal>
      <div className={getClassName([styles.wrapper, { [styles.wrapper__closing]: isClosing }])}>
        <div {...rest} className={styles.content}>
          <ChopLogicButton
            icon={IconName.Cancel}
            view={ButtonView.Icon}
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
