import { getClassName } from '@utils';
import type { FC, MouseEvent } from 'react';
import './IconButton.css';

import { Icon } from '@components/atoms';
import { ElementSize, IconName } from '@enums';
import type { ButtonProps } from '@types';

export const IconButton: FC<Omit<ButtonProps, 'text'>> = ({
  icon,
  className,
  label,
  iconSize = ElementSize.Medium,
  type = 'button',
  isLoading = false,
  onClick,
  ...rest
}) => {
  const buttonClass = getClassName([
    'cl-icon-button',
    className,
    { 'cl-button_loading': isLoading },
  ]);
  const iconClass = getClassName([
    'cl-icon-button__icon',
    { 'cl-button__icon_spinning': isLoading },
  ]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (isLoading) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  const displayIcon = isLoading ? IconName.Loader : icon;

  return (
    <button
      {...rest}
      type={type}
      aria-label={label}
      aria-busy={isLoading}
      className={buttonClass}
      onClick={handleClick}
    >
      {displayIcon && <Icon name={displayIcon} className={iconClass} size={iconSize} />}
    </button>
  );
};
