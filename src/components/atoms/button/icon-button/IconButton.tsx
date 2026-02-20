import { getClassName } from '@utils';
import type { FC } from 'react';
import './IconButton.css';

import { Icon } from '@components/atoms';
import { ElementSize } from '@enums';
import type { ButtonProps } from '@types';

export const IconButton: FC<Omit<ButtonProps, 'text'>> = ({
  icon,
  className,
  label,
  iconSize = ElementSize.Medium,
  ...rest
}) => (
  <button {...rest} aria-label={label} className={getClassName(['cl-icon-button', className])}>
    {icon && <Icon name={icon} className="cl-icon-button__icon" size={iconSize} />}
  </button>
);
