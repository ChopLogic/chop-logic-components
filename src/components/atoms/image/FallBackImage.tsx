import { Icon } from '@components/atoms';
import { IconName } from '@enums';
import type { FC } from 'react';
import styles from './Image.module.scss';

export const FallbackImage: FC = () => (
  <div className={styles.fallback}>
    <Icon name={IconName.Image} className={styles.fallback_icon} />
    <span className={styles.fallback_text}>Image not available</span>
  </div>
);
