import React from 'react';
import { ChopLogicButton } from '@components';
import { ChopLogicButtonView, ChopLogicIconName } from '@enums';
import styles from './Header.module.scss';

const ChopLogicModalLayoutHeader: React.FC<{
  title: string;
  onClose: () => void;
}> = ({ title, onClose }): React.ReactElement => {
  return (
    <header className={styles.header}>
      {title}
      <ChopLogicButton icon={ChopLogicIconName.Cancel} view={ChopLogicButtonView.Icon} label='Close modal window' onClick={onClose} />
    </header>
  );
};

export default ChopLogicModalLayoutHeader;
