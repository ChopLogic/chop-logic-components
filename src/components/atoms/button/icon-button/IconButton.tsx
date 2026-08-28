import type { FC } from 'react';
import './IconButton.css';
import { Icon } from '@components/atoms';
import { ElementSize } from '@enums';
import type { ButtonProps } from '@types';
import { getButtonLoadingProps } from '../getButtonLoadingProps';

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
  const { buttonClass, iconClass, displayIcon, handleClick } = getButtonLoadingProps({
    baseClass: 'cl-icon-button',
    iconBaseClass: 'cl-icon-button__icon',
    className,
    isLoading,
    icon,
    onClick,
  });

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
