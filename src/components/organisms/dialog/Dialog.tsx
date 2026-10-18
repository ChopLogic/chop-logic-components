import { Button, Header, Portal } from '@components/atoms';
import { ButtonView, IconName } from '@enums';
import {
  useBodyScrollLock,
  useElementIds,
  useIsMounted,
  useKeyPress,
  useModalFocusTrap,
} from '@hooks';
import type { DialogProps } from '@types';
import { getClassName } from '@utils';
import { type FC, useRef } from 'react';

import './Dialog.css';

const Dialog: FC<DialogProps> = ({
  isOpened,
  onClose,
  title,
  children,
  icon,
  id,
  contentClassName,
  headerClassName,
  bodyClassName,
  ...rest
}) => {
  const isMounted = useIsMounted(isOpened);
  const isClosing = isMounted && !isOpened;
  const { elementId } = useElementIds(id);
  const titleId = `${elementId}-title`;
  const contentClass = getClassName(['cl-dialog__content', contentClassName]);
  const bodyClass = getClassName(['cl-dialog__body', bodyClassName]);

  const modalRef = useRef(null);

  useModalFocusTrap({ modalRef, isOpened });
  useKeyPress({ keyCode: 'Escape', ref: modalRef, onKeyPress: onClose });
  useBodyScrollLock({ isLocked: isOpened });

  if (!isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={getClassName(['cl-dialog', { 'cl-dialog_closing': isClosing }])}>
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          id={elementId}
          {...rest}
          className="cl-dialog__layout"
        >
          <Button
            icon={IconName.X}
            view={ButtonView.Icon}
            label="Close modal window"
            onClick={onClose}
            className="cl-dialog__button"
          />
          <div className={contentClass}>
            <header className={headerClassName}>
              <Header as="h3" icon={icon} id={titleId}>
                {title}
              </Header>
            </header>
            <div className={bodyClass}>{children}</div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Dialog;
