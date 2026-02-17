import '@__docs__/styles/ResponsiveWrapper.css';
import type { NumericInputProps } from '@types';
import type { FC } from 'react';
import NumericInput from '../NumericInput';

export const NumericInputExample: FC<NumericInputProps> = (props) => {
  return <NumericInput {...props} className="responsiveWrapper" />;
};
