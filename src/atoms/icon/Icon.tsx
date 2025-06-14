import React from 'react';
import { ChopLogicIconProps } from '@models';
import { ChopLogicIconDictionary } from '@assets/icons';

const ChopLogicIcon: React.FC<ChopLogicIconProps> = ({ name, testId, ...rest }) => {
  if (!name) return null;
  const Component = ChopLogicIconDictionary[name];

  return <Component data-testid={testId} {...rest} />;
};

export default ChopLogicIcon;
