import React from 'react';
import styles from '../styles.module.css';
import { ChopLogicButton } from 'components/index';
import { Icon } from 'enums/icon';

type ChopLogicModalLayoutHeaderProps = {
  title: string;
  onClose: () => void;
};

const ChopLogicModalLayoutHeader = ({ title, onClose }: ChopLogicModalLayoutHeaderProps): React.ReactElement => {
  return (
    <header className={styles.header}>
      {title}
      <ChopLogicButton icon={Icon.Cancel} view='icon' onClick={onClose} />
    </header>
  );
};

export default ChopLogicModalLayoutHeader;
