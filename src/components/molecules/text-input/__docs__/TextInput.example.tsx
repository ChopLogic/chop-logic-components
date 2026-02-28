import '@__docs__/styles/ResponsiveWrapper.css';
import type { TextInputProps } from '@types';
import type { FC } from 'react';

import TextInput from '../TextInput';

export const TextInputExample: FC<TextInputProps> = (props) => {
  return <TextInput {...props} className="responsiveWrapper" />;
};
