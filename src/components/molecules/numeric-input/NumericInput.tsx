import type { NumericInputProps } from '@types';
import type { FC } from 'react';

import NumericInputStateful from './NumericInputStateful';
import NumericInputStateless from './NumericInputStateless';

/**
 * NumericInput component factory
 * Renders either a stateful or stateless component
 * based on the `stateless` prop.
 */
const NumericInput: FC<NumericInputProps> = (props) => {
  if (props.stateless) {
    return <NumericInputStateless {...props} />;
  }

  return <NumericInputStateful {...props} />;
};

export default NumericInput;
