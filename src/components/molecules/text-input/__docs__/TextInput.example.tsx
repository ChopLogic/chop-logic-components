import styles from '@__docs__/styles/ResponsiveWrapper.module.scss';
import type { TextInputProps } from '@types';
import type { FC } from 'react';

import TextInput from '../TextInput';

export const TextInputExample: FC<TextInputProps> = (props) => {
  return <TextInput {...props} className={styles.responsiveWrapper} />;
};
