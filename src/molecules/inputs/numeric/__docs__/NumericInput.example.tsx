import React from 'react';
import { ChopLogicNumericInputProps } from '@models';

import NumericInput from '../NumericInput';

export const NumericInputExample: React.FC<ChopLogicNumericInputProps> = (props) => {
  return <NumericInput {...props} style={{ width: '240px' }} />;
};
