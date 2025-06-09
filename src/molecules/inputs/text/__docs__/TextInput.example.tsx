import React from 'react';
import { ChopLogicTextInputProps } from '@models';

import TextInput from '../TextInput.tsx';

export const TextInputExample: React.FC<ChopLogicTextInputProps> = (props) => {
  return <TextInput {...props} style={{ width: '240px' }} />;
};
