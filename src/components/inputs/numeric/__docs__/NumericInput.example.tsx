import React from 'react';

import { ChopLogicNumericInputProps } from '@/models';

import NumericInput from '../NumericInput';

const Example: React.FC<ChopLogicNumericInputProps> = (props) => {
  return <NumericInput {...props} style={{ width: '240px' }} />;
};

export default Example;
