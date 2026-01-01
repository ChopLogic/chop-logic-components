import type { SelectProps } from '@models';
import styles from '@styles/storybook/ResponsiveWrapper.module.scss';
import type { FC } from 'react';
import Select from '../Select';

export const SelectExample: FC<SelectProps> = (props) => {
  return <Select {...props} className={styles.responsiveWrapper} />;
};
