import type { TextInputProps } from '@types';
import type { FC } from 'react';

import TextInputStateful from './TextInputStateful';
import TextInputStateless from './TextInputStateless';

/**
 * TextInput component factory
 * Renders either a stateful or stateless component
 * based on the `stateless` prop.
 */
const TextInput: FC<TextInputProps> = (props) => {
  if (props.stateless) {
    return <TextInputStateless {...props} />;
  }

  return <TextInputStateful {...props} />;
};

export default TextInput;
