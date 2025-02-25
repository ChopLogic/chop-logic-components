import React from 'react';
import { ChopLogicIconDictionary } from '@icons';
import { ChopLogicIconProps } from '@models';

const ChopLogicIcon: React.FC<ChopLogicIconProps> = ({ name, testId, ...rest }) => {
  if (!name) return null;
  const Component = ChopLogicIconDictionary[name];

  return <Component data-testid={testId} {...rest} />;
};

export default ChopLogicIcon;
