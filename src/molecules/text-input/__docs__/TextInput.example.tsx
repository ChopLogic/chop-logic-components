import type { TextInputProps } from '@models';
import type { FC } from 'react';

import TextInput from '../TextInput';

export const TextInputExample: FC<TextInputProps> = (props) => {
  return <TextInput {...props} style={{ width: '240px' }} />;
};
