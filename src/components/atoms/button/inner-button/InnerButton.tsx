import { Icon } from '@components/atoms';
import { ElementSize } from '@enums';
import type { FC } from 'react';
import './InnerButton.css';
import type { ButtonProps } from '@types';
import { getButtonLoadingProps } from '../getButtonLoadingProps';

export const InnerButton: FC<Omit<ButtonProps, 'text'>> = ({
  onClick,
  label,
  icon,
  disabled,
  className,
  iconSize = ElementSize.Small,
  isLoading,
  ...rest
}) => {
  const { buttonClass, iconClass, displayIcon, handleClick } = getButtonLoadingProps({
    baseClass: 'cl-inner-button',
    iconBaseClass: 'cl-inner-button__icon',
    className,
    isLoading,
    icon,
    onClick,
  });

  return (
    <button
      className={buttonClass}
      onClick={handleClick}
      aria-label={label}
      type="button"
      disabled={disabled}
      aria-busy={isLoading}
      {...rest}
    >
      {displayIcon && <Icon name={icon} size={iconSize} className={iconClass} />}
    </button>
  );
};
