import styles from '@__docs__/styles/ResponsiveWrapper.module.scss';
import type { MultiSelectProps } from '@types';
import type { FC } from 'react';
import MultiSelect from '../MultiSelect';

export const MultiSelectExample: FC<MultiSelectProps> = (props) => {
  return <MultiSelect {...props} className={styles.responsiveWrapper} />;
};
