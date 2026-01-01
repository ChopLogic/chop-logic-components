import type { MultiSelectProps } from '@models';
import styles from '@styles/storybook/ResponsiveWrapper.module.scss';
import type { FC } from 'react';
import MultiSelect from '../MultiSelect';

export const MultiSelectExample: FC<MultiSelectProps> = (props) => {
  return <MultiSelect {...props} className={styles.responsiveWrapper} />;
};
