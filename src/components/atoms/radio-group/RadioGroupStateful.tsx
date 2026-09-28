import type { RadioGroupProps } from '@types';
import { type FC, useState } from 'react';

import RadioGroupStateless from './RadioGroupStateless';

const RadioGroupStateful: FC<RadioGroupProps> = ({ defaultValue, onChange, ...props }) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(defaultValue);

  const handleChange = (value: string) => {
    setSelectedValue(value);
    onChange?.(value);
  };

  return <RadioGroupStateless {...props} value={selectedValue} onChange={handleChange} />;
};

export default RadioGroupStateful;
