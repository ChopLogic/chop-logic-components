import { Button, Header, Portal } from '@components/atoms';
import { ButtonView, IconName } from '@enums';
import { useIsMounted, useKeyPress, useModalFocusTrap } from '@hooks';
import type { DialogProps } from '@types';
import { getClassName } from '@utils';
import { type FC, useRef } from 'react';

import './Dialog.css';

const Dialog: FC<DialogProps> = ({ isOpened, onClose, title, children, icon, ...rest }) => {
  const isMounted = useIsMounted(isOpened);
  const isClosing = isMounted && !isOpened;

  const modalRef = useRef(null);

  useModalFocusTrap({ modalRef, isOpened });
  useKeyPress({ keyCode: 'Escape', ref: modalRef, onKeyPress: onClose });

  if (!isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={getClassName(['cl-dialog', { 'cl-dialog_closing': isClosing }])}>
        <div ref={modalRef} role="dialog" aria-modal="true" {...rest} className="cl-dialog__layout">
          <Button
            icon={IconName.X}
            view={ButtonView.Icon}
            label="Close modal window"
            onClick={onClose}
            className="cl-dialog__button"
          />
          <header>
            <Header as="h3" icon={icon}>
              {title}
            </Header>
          </header>
          <div>{children}</div>
        </div>
      </div>
    </Portal>
  );
};

export default Dialog;
