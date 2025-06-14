import React from 'react';
import { ChopLogicCheckboxProps } from '@models';

import ChopLogicCheckbox from '../Checkbox';

export const CheckboxExample: React.FC<ChopLogicCheckboxProps> = (props) => {
  return <ChopLogicCheckbox {...props} />;
};
