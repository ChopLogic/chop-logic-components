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
  size?: 's' | 'm' | 'l' | 'xl';
}

const Icon: FC<IconProps> = ({ name, testId, className, hidden, size = 'm', ...rest }) => {
  if (!name) return null;

  const iconClass = getClassName([
    className,
    styles.icon,
    name,
    {
      [styles.icon__small]: size === 's',
      [styles.icon__medium]: size === 'm',
      [styles.icon__large]: size === 'l',
      [styles.icon__xlarge]: size === 'xl',
    },
  ]);

  return <span data-testid={testId} className={iconClass} aria-hidden={hidden} {...rest}></span>;
};

export default Icon;
