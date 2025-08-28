import { MultiSelectProps } from '@models';
import { FC } from 'react';

import MultiSelect from '../MultiSelect';

export const MultiSelectExample: FC<MultiSelectProps> = (props) => {
  return <MultiSelect {...props} style={{ width: '240px' }} />;
};
