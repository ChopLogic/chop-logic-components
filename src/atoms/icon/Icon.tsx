import React from 'react';
import { ChopLogicIconProps } from '@models';
import { ChopLogicIconDictionary } from '@assets/icons';
import { getClassName } from '@utils';
import styles from './Icon.module.scss';

const ChopLogicIcon: React.FC<ChopLogicIconProps> = ({ name, testId, className, ...rest }) => {
  if (!name) return null;
  const Component = ChopLogicIconDictionary[name];
  const iconClass = getClassName([className, styles.icon]);

  return <Component data-testid={testId} className={iconClass} {...rest} />;
};

export default ChopLogicIcon;
