import React, { PropsWithChildren, useRef } from 'react';
import ChopLogicModalLayoutHeader from './Header';
import { useModalFocusTrap } from 'hooks/use-modal-focus-trap';
import { useKeyPress } from 'hooks/use-key-press';
import '../Dialog.styles.css';

type ModalLayoutProps = PropsWithChildren &
  React.HTMLAttributes<HTMLDivElement> & {
    title: string;
    onClose: () => void;
    isOpened: boolean;
  };

const ChopLogicModalLayout: React.FC<ModalLayoutProps> = ({ title, onClose, isOpened, children, ...rest }): React.ReactElement => {
  const modalRef = useRef<HTMLDivElement>(null);

  useModalFocusTrap({ modalRef, isOpened });
  useKeyPress({ keyCode: 'Escape', ref: modalRef, onKeyPress: onClose });

  return (
    <div ref={modalRef} role='dialog' aria-modal='true' className='cl-dialog' {...rest}>
      <ChopLogicModalLayoutHeader title={title} onClose={onClose} />
      <div className='cl-dialog__content'>{children}</div>
    </div>
  );
};

export default ChopLogicModalLayout;
