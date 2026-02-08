import type { IconName } from '@enums';
import type { ChopLogicComponentProps } from '@types';
import { getClassName } from '@utils';
import type { FC } from 'react';
import styles from './Icon.module.scss';

export interface IconProps extends ChopLogicComponentProps {
  name?: IconName;
  testId?: string;
  title?: string;
  hidden?: boolean;
}

const Icon: FC<IconProps> = ({ name, testId, className, hidden, ...rest }) => {
  if (!name) return null;
  const iconClass = getClassName([className, styles.icon, name]);

  return <span data-testid={testId} className={iconClass} aria-hidden={hidden} {...rest}></span>;
};

export default Icon;
