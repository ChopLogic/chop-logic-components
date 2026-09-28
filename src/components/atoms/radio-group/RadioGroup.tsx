import type { RadioGroupProps } from '@types';
import type { FC } from 'react';

import RadioGroupStateful from './RadioGroupStateful';
import RadioGroupStateless from './RadioGroupStateless';

const RadioGroup: FC<RadioGroupProps> = (props) => {
  if (props.stateless) {
    return <RadioGroupStateless {...props} />;
  }

  return <RadioGroupStateful {...props} />;
};

export default RadioGroup;
