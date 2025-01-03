import React from 'react';
import { ChopLogicTextInputProps } from '@models';

import TextInput from '../TextInput';

const Example: React.FC<ChopLogicTextInputProps> = (props) => {
  return <TextInput {...props} style={{ width: '240px' }} />;
};

export default Example;
