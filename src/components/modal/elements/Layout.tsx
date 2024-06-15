import React, { PropsWithChildren, useRef } from 'react';
import styles from '../styles.module.css';
import ChopLogicModalLayoutHeader from './Header';
import { useModalFocusTrap } from 'utils/use-modal-focus-trap';

type ModalLayoutProps = PropsWithChildren & {
  title: string;
  onClose: () => void;
  isOpened: boolean;
  id?: string;
};

const ChopLogicModalLayout = ({ title, id, onClose, isOpened, children }: ModalLayoutProps): React.ReactElement => {
  const modalRef = useRef<HTMLDivElement>(null);

  useModalFocusTrap({ modalRef, isOpened });

  return (
    <div ref={modalRef} role='dialog' aria-modal='true' id={id} className={styles.window}>
      <ChopLogicModalLayoutHeader title={title} onClose={onClose} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default ChopLogicModalLayout;
