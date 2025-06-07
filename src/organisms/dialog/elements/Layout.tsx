import React, { HTMLAttributes, PropsWithChildren, useRef } from 'react';
import { useKeyPress, useModalFocusTrap } from '@hooks';
import styles from './Layout.module.scss';
import ChopLogicModalLayoutHeader from './Header.tsx';

type DialogLayoutProps = PropsWithChildren &
  HTMLAttributes<HTMLDivElement> & {
    title: string;
    onClose: () => void;
    isOpened: boolean;
  };

const ChopLogicModalLayout: React.FC<DialogLayoutProps> = ({ title, onClose, isOpened, children, ...rest }): React.ReactElement => {
  const modalRef = useRef<HTMLDivElement>(null);

  useModalFocusTrap({ modalRef, isOpened });
  useKeyPress({ keyCode: 'Escape', ref: modalRef, onKeyPress: onClose });

  return (
    <div ref={modalRef} role='dialog' aria-modal='true' {...rest} className={styles.layout}>
      <ChopLogicModalLayoutHeader title={title} onClose={onClose} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default ChopLogicModalLayout;
