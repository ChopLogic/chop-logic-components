import { ChopLogicTextInputProps } from '@models';
import React from 'react';

import TextInput from '../TextInput.tsx';

export const TextInputExample: React.FC<ChopLogicTextInputProps> = (props) => {
  return <TextInput {...props} style={{ width: '240px' }} />;
};
