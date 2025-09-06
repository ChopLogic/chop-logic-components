import { ChopLogicSelectProps } from '@models';
import { FC } from 'react';

import ChopLogicSelect from '../Select.tsx';

export const ChopLogicSelectExample: FC<ChopLogicSelectProps> = (props) => {
  return <ChopLogicSelect {...props} style={{ width: '240px' }} />;
};
