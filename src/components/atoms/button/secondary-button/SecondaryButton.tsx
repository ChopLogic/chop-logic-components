import type { FC } from 'react';
import './SecondaryButton.css';
import { Icon } from '@components/atoms';
import { ElementSize } from '@enums';
import type { ButtonProps } from '@types';
import { getButtonLoadingProps } from '../getButtonLoadingProps';

export const SecondaryButton: FC<ButtonProps> = ({
  icon,
  text,
  className,
  iconSize = ElementSize.Small,
  type = 'button',
  isLoading = false,
  onClick,
  ...rest
}) => {
  const { buttonClass, iconClass, displayIcon, handleClick } = getButtonLoadingProps({
    baseClass: 'cl-secondary-button',
    iconBaseClass: 'cl-secondary-button__icon',
    className,
    isLoading,
    icon,
    onClick,
  });

  return (
    <button
      {...rest}
      type={type}
      className={buttonClass}
      onClick={handleClick}
      aria-busy={isLoading}
    >
      {displayIcon && <Icon name={displayIcon} className={iconClass} size={iconSize} />}
      <span className="cl-secondary-button__text">{text}</span>
    </button>
  );
};
