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
  size?: 'small' | 'medium' | 'large';
}

const Icon: FC<IconProps> = ({ name, testId, className, hidden, size = 'medium', ...rest }) => {
  if (!name) return null;

  const iconClass = getClassName([
    className,
    styles.icon,
    name,
    {
      [styles.icon__small]: size === 'small',
      [styles.icon__medium]: size === 'medium',
      [styles.icon__large]: size === 'large',
    },
  ]);

  return <span data-testid={testId} className={iconClass} aria-hidden={hidden} {...rest}></span>;
};

export default Icon;
