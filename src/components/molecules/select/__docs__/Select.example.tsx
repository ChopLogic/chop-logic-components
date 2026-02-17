import '@__docs__/styles/ResponsiveWrapper.css';
import type { SelectProps } from '@types';
import type { FC } from 'react';
import Select from '../Select';

export const SelectExample: FC<SelectProps> = (props) => {
  return <Select {...props} className="responsiveWrapper" />;
};
