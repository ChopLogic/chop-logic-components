import { ChopLogicNumericInputProps } from '@models';
import { FC } from 'react';

import NumericInput from '../NumericInput';

export const NumericInputExample: FC<ChopLogicNumericInputProps> = (props) => {
  return <NumericInput {...props} style={{ width: '240px' }} />;
};
