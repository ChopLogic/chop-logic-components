import styles from '@__docs__/styles/ResponsiveWrapper.module.scss';
import type { NumericInputProps } from '@types';
import type { FC } from 'react';
import NumericInput from '../NumericInput';

export const NumericInputExample: FC<NumericInputProps> = (props) => {
  return <NumericInput {...props} className={styles.responsiveWrapper} />;
};
