import type { IconName } from '@enums';
import type { ChopLogicComponentProps } from '@types';
import { getClassName } from '@utils';
import type { FC } from 'react';
import './Icon.css';

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
    'cl-icon',
    name,
    {
      'cl-icon_small': size === 's',
      'cl-icon_medium': size === 'm',
      'cl-icon_large': size === 'l',
      'cl-icon_xlarge': size === 'xl',
    },
  ]);

  return <span data-testid={testId} className={iconClass} aria-hidden={hidden} {...rest}></span>;
};

export default Icon;
