import type { CheckboxProps } from '@types';
import type { FC } from 'react';

import CheckboxStateful from './CheckboxStateful';
import CheckboxStateless from './CheckboxStateless';

/**
 * Checkbox component factory
 * Renders either a stateful or stateless component
 * based on the `stateless` prop.
 */
const Checkbox: FC<CheckboxProps> = (props) => {
  if (props.stateless) {
    return <CheckboxStateless {...props} />;
  }

  return <CheckboxStateful {...props} />;
};

export default Checkbox;
