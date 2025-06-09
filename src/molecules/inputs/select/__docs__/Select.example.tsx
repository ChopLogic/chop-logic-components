import React from 'react';
import { ChopLogicSelectProps } from '@models';

import ChopLogicSelect from '../Select.tsx';

export const ChopLogicSelectExample: React.FC<ChopLogicSelectProps> = (props) => {
  return <ChopLogicSelect {...props} style={{ width: '240px' }} />;
};
