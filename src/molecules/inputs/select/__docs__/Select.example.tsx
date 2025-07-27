import { ChopLogicSelectProps } from '@models';
import React from 'react';

import ChopLogicSelect from '../Select.tsx';

export const ChopLogicSelectExample: React.FC<ChopLogicSelectProps> = (props) => {
  return <ChopLogicSelect {...props} style={{ width: '240px' }} />;
};
