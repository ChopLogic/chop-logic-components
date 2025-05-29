import React from 'react';
import { ChopLogicButtonView, ChopLogicIconName } from '@enums';
import styles from './Header.module.scss';
import { ChopLogicButton } from '@components/atoms';

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
