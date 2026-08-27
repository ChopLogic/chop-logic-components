import { getClassName } from '@utils';
import type { FC, MouseEvent } from 'react';
import './PrimaryButton.css';
import { Icon } from '@components/atoms';
import { ElementSize, IconName } from '@enums';
import type { ButtonProps } from '@types';

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
  const buttonClass = getClassName([
    'cl-primary-button',
    className,
    { 'cl-button_loading': isLoading },
  ]);
  const iconClass = getClassName([
    'cl-primary-button__icon',
    { 'cl-button__icon_spinning': isLoading },
  ]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (isLoading) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  return (
    <button
      {...rest}
      type={type}
      className={buttonClass}
      onClick={handleClick}
      disabled={disabled}
      aria-busy={isLoading}
    >
      {icon && (
        <Icon name={isLoading ? IconName.Loader : icon} className={iconClass} size={iconSize} />
      )}
      <span className="cl-primary-button__text">{text}</span>
    </button>
  );
};
