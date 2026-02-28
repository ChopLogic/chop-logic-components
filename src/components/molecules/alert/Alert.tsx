import { Button, Header, Portal } from '@components/atoms';
import { AlertMode, ButtonView, ElementSize, IconName } from '@enums';
import { useIsHovered, useIsMounted, useRemainingTimer } from '@hooks';
import type { AlertProps } from '@types';
import { getClassName } from '@utils';
import { type FC, useRef } from 'react';

import './Alert.css';
import { getAlertIcon, getAlertTitle } from './Alert.helpers';
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
  const alertClassName = getClassName([
    'cl-alert',
    `cl-alert_${mode.toLowerCase()}`,
    { 'cl-alert_closing': isClosing },
  ]);

  return (
    <Portal>
      <div ref={containerRef} className={alertClassName}>
        <div {...rest} className="cl-alert__content">
          {isCloseButtonVisible && (
            <Button
              icon={IconName.X}
              view={ButtonView.Icon}
              iconSize={ElementSize.Medium}
              label="Close alert"
              onClick={onClose}
              className="cl-alert__button"
            />
          )}
          <header>
            <Header icon={alertTitleIcon} as="h3" className="cl-alert__header">
              {alertTitle}
            </Header>
          </header>
          <p className="cl-alert__message">{message}</p>
          {autoClose && <AlertProgressBar remainingPercentage={remainingPercentage} />}
        </div>
      </div>
    </Portal>
  );
};

export default Alert;
