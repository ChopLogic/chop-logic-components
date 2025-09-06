import { ChopLogicTextInputProps } from '@models';
import { FC } from 'react';

import TextInput from '../TextInput.tsx';

export const TextInputExample: FC<ChopLogicTextInputProps> = (props) => {
  return <TextInput {...props} style={{ width: '240px' }} />;
};
