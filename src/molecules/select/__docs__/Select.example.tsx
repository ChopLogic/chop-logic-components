import type { SelectProps } from '@models';
import type { FC } from 'react';

import Select from '../Select';

export const SelectExample: FC<SelectProps> = (props) => {
  return <Select {...props} style={{ width: '240px' }} />;
};
