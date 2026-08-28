import type { FC } from 'react';
import './PrimaryButton.css';
import { Icon } from '@components/atoms';
import { ElementSize } from '@enums';
import type { ButtonProps } from '@types';
import { getButtonLoadingProps } from '../getButtonLoadingProps';

export const PrimaryButton: FC<ButtonProps> = ({
  icon,
  text,
  className,
  iconSize = ElementSize.Small,
  type = 'button',
  isLoading = false,
  disabled,
  onClick,
  ...rest
}) => {
  const { buttonClass, iconClass, displayIcon, handleClick } = getButtonLoadingProps({
    baseClass: 'cl-primary-button',
    iconBaseClass: 'cl-primary-button__icon',
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
      disabled={disabled}
      aria-busy={isLoading}
    >
      {displayIcon && <Icon name={displayIcon} className={iconClass} size={iconSize} />}
      <span className="cl-primary-button__text">{text}</span>
    </button>
  );
};
