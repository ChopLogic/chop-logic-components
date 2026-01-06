import type { FC } from 'react';
import styles from './Alert.module.scss';

export const AlertProgressBar: FC<{ remainingPercentage: number }> = ({ remainingPercentage }) => {
  return (
    <progress
      className={styles.progress}
      value={remainingPercentage}
      max={100}
      style={{ width: '100%' }}
    />
  );
};
