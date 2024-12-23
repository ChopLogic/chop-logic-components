import React from 'react';

import { ChopLogicMultiSelectProps } from '@/types';

import ChopLogicMultiSelect from '../MultiSelect';

const Example: React.FC<ChopLogicMultiSelectProps> = (props) => {
  return <ChopLogicMultiSelect {...props} style={{ width: '240px' }} />;
};

export default Example;
