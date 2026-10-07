import type { RadioGroupProps } from '@types';
import type { FC } from 'react';

import RadioGroup from '../RadioGroup';

export const RadioGroupExample: FC<RadioGroupProps> = (props) => {
  return <RadioGroup {...props} />;
};
