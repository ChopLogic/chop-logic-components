import type { MultiSelectProps } from '@models';
import type { FC } from 'react';

import MultiSelect from '../MultiSelect';

export const MultiSelectExample: FC<MultiSelectProps> = (props) => {
  return <MultiSelect {...props} style={{ width: '240px' }} />;
};
