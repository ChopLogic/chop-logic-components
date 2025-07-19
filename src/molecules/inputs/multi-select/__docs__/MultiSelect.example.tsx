import { ChopLogicMultiSelectProps } from '@models';
import React from 'react';

import ChopLogicMultiSelect from '../MultiSelect.tsx';

export const MultiSelectExample: React.FC<ChopLogicMultiSelectProps> = (props) => {
  return <ChopLogicMultiSelect {...props} style={{ width: '240px' }} />;
};
