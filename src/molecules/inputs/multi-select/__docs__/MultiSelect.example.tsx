import { ChopLogicMultiSelectProps } from '@models';
import { FC } from 'react';

import ChopLogicMultiSelect from '../MultiSelect.tsx';

export const MultiSelectExample: FC<ChopLogicMultiSelectProps> = (props) => {
  return <ChopLogicMultiSelect {...props} style={{ width: '240px' }} />;
};
