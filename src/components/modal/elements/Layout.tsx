import React, { PropsWithChildren } from 'react';
import styles from '../styles.module.css';

type ModalLayoutProps = PropsWithChildren & {
  title: string;
  onClose: () => void;
  id?: string;
};

const ChopLogicModalLayout = ({ title, id, onClose, children }: ModalLayoutProps): React.ReactElement => {
  return (
    <div role='dialog' aria-modal='true' id={id} className={styles.window}>
      <header className='modal-window__header' id='modal-window-heading'>
        {title}
        <button onClick={onClose}>X</button>
      </header>
      <div role='region' aria-labelledby='modal-window-heading'>
        {children}
      </div>
    </div>
  );
};

export default ChopLogicModalLayout;
