import type { TextInputProps } from '@models';
import styles from '@styles/storybook/ResponsiveWrapper.module.scss';
import type { FC } from 'react';

import TextInput from '../TextInput';

export const TextInputExample: FC<TextInputProps> = (props) => {
  return <TextInput {...props} className={styles.responsiveWrapper} />;
};
