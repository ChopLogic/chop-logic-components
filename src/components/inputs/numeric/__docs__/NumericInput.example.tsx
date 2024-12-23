import React from 'react';

import { ChopLogicNumericInputProps } from '@/types';

import NumericInput from '../NumericInput';

const Example: React.FC<ChopLogicNumericInputProps> = (props) => {
  return <NumericInput {...props} style={{ width: '240px' }} />;
};

export default Example;
