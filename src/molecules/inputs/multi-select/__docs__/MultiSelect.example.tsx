import React from 'react';
import { ChopLogicMultiSelectProps } from '@models';

import ChopLogicMultiSelect from '../MultiSelect.tsx';

export const MultiSelectExample: React.FC<ChopLogicMultiSelectProps> = (props) => {
  return <ChopLogicMultiSelect {...props} style={{ width: '240px' }} />;
};
