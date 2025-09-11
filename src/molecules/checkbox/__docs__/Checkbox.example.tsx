import { CheckboxProps } from '@models';
import { FC } from 'react';

import Checkbox from '../Checkbox';

export const CheckboxExample: FC<CheckboxProps> = (props) => {
  return <Checkbox {...props} />;
};
