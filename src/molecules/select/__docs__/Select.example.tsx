import { SelectProps } from '@models';
import { FC } from 'react';

import Select from '../Select.tsx';

export const SelectExample: FC<SelectProps> = (props) => {
  return <Select {...props} style={{ width: '240px' }} />;
};
