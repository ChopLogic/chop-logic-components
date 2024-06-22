import React, { PropsWithChildren, useRef } from 'react';
import styles from '../styles.module.css';
import ChopLogicModalLayoutHeader from './Header';
import { useModalFocusTrap } from 'hooks/use-modal-focus-trap';
import { useKeyPress } from 'hooks/use-key-press';

type ModalLayoutProps = PropsWithChildren &
  React.HTMLAttributes<HTMLDivElement> & {
    title: string;
    onClose: () => void;
    isOpened: boolean;
  };

const ChopLogicModalLayout = ({ title, onClose, isOpened, children, ...rest }: ModalLayoutProps): React.ReactElement => {
  const modalRef = useRef<HTMLDivElement>(null);

  useModalFocusTrap({ modalRef, isOpened });
  useKeyPress({ keyCode: 'Escape', ref: modalRef, onKeyPress: onClose });

  return (
    <div ref={modalRef} role='dialog' aria-modal='true' className={styles.window} {...rest}>
      <ChopLogicModalLayoutHeader title={title} onClose={onClose} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default ChopLogicModalLayout;
