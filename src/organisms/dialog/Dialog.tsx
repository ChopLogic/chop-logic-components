import { ChopLogicHeader, ChopLogicPortal } from '@atoms';
import { ChopLogicButtonView, ChopLogicIconName } from '@enums';
import { useIsMounted, useKeyPress, useModalFocusTrap } from '@hooks';
import { ChopLogicDialogProps } from '@models';
import { ChopLogicButton } from '@molecules';
import { getClassName } from '@utils';
import React, { useRef } from 'react';

import styles from './Dialog.module.scss';

const ChopLogicDialog: React.FC<ChopLogicDialogProps> = ({ isOpened, onClose, title, children, icon, ...rest }) => {
  const isMounted = useIsMounted(isOpened);
  const isClosing = isMounted && !isOpened;

  const modalRef = useRef<HTMLDivElement>(null);

  useModalFocusTrap({ modalRef, isOpened });
  useKeyPress({ keyCode: 'Escape', ref: modalRef, onKeyPress: onClose });

  if (!isMounted) {
    return null;
  }

  return (
    <ChopLogicPortal>
      <div className={getClassName([styles.dialog, { [styles.dialog__closing]: isClosing }])}>
        <div ref={modalRef} role='dialog' aria-modal='true' {...rest} className={styles.layout}>
          <ChopLogicButton
            icon={ChopLogicIconName.Cancel}
            view={ChopLogicButtonView.Icon}
            label='Close modal window'
            onClick={onClose}
            className={styles.layout_button}
          />
          <header>
            <ChopLogicHeader as='h3' icon={icon}>
              {title}
            </ChopLogicHeader>
          </header>
          <div>{children}</div>
        </div>
      </div>
    </ChopLogicPortal>
  );
};

export default ChopLogicDialog;
