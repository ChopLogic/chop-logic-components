import { ChopLogicCheckboxProps } from '@models';
import { FC } from 'react';

import ChopLogicCheckbox from '../Checkbox';

export const CheckboxExample: FC<ChopLogicCheckboxProps> = (props) => {
  return <ChopLogicCheckbox {...props} />;
};
