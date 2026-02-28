import { ElementSize, type IconName } from '@enums';
import type { ChopLogicComponentProps } from '@types';
import { getClassName } from '@utils';
import type { FC } from 'react';
import './Icon.css';

export interface IconProps extends ChopLogicComponentProps {
  name?: IconName;
  testId?: string;
  hidden?: boolean;
  size?: ElementSize;
}

const Icon: FC<IconProps> = ({
  name,
  testId,
  className,
  hidden,
  size = ElementSize.Medium,
  ...rest
}) => {
  if (!name) return null;

  const iconClass = getClassName([
    className,
    'cl-icon',
    name,
    {
      'cl-icon_extra-small': size === ElementSize.ExtraSmall,
      'cl-icon_small': size === ElementSize.Small,
      'cl-icon_medium': size === ElementSize.Medium,
      'cl-icon_large': size === ElementSize.Large,
      'cl-icon_xlarge': size === ElementSize.ExtraLarge,
      'cl-icon_2xlarge': size === ElementSize.ExtraExtraLarge,
    },
  ]);

  return <span data-testid={testId} className={iconClass} aria-hidden={hidden} {...rest}></span>;
};

export default Icon;
