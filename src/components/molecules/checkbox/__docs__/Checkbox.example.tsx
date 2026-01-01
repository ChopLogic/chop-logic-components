import type { CheckboxProps } from '@models';
import type { FC } from 'react';

import Checkbox from '../Checkbox';

export const CheckboxExample: FC<CheckboxProps> = (props) => {
  return <Checkbox {...props} />;
};
