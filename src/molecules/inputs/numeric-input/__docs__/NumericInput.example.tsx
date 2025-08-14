import { NumericInputProps } from '@models';
import { FC } from 'react';

import NumericInput from '../NumericInput';

export const NumericInputExample: FC<NumericInputProps> = (props) => {
  return <NumericInput {...props} style={{ width: '240px' }} />;
};
