import type { CheckboxProps } from '@types';
import type { FC } from 'react';

import Checkbox from '../Checkbox';

export const CheckboxExample: FC<CheckboxProps> = (props) => {
  return <Checkbox {...props} />;
};
