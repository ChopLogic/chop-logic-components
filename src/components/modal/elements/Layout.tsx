import React, { PropsWithChildren } from 'react';
import styles from '../styles.module.css';
import ChopLogicModalLayoutHeader from './Header';

type ModalLayoutProps = PropsWithChildren & {
  title: string;
  onClose: () => void;
  id?: string;
};

const ChopLogicModalLayout = ({ title, id, onClose, children }: ModalLayoutProps): React.ReactElement => {
  return (
    <div role='dialog' aria-modal='true' id={id} className={styles.window}>
      <ChopLogicModalLayoutHeader title={title} onClose={onClose} />
      <div>{children}</div>
    </div>
  );
};

export default ChopLogicModalLayout;
