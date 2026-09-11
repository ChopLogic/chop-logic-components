import { IconName } from '@enums';
import { getClassName } from '@utils';
import type { MouseEvent } from 'react';

interface ButtonLoadingParams {
  baseClass: string;
  iconBaseClass: string;
  className?: string;
  isLoading?: boolean;
  icon?: IconName;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

interface ButtonLoadingProps {
  buttonClass: string;
  iconClass: string;
  displayIcon: IconName | undefined;
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const getButtonLoadingProps = ({
  baseClass,
  iconBaseClass,
  className,
  icon,
  onClick,
  isLoading = false,
}: ButtonLoadingParams): ButtonLoadingProps => {
  const buttonClass = getClassName([baseClass, className, { 'cl-button_loading': isLoading }]);
  const iconClass = getClassName([iconBaseClass, { 'cl-button__icon_spinning': isLoading }]);
  const resultIcon = isLoading ? IconName.Loader : icon;
  const displayIcon = icon ? resultIcon : undefined;

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (isLoading) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  return { buttonClass, iconClass, displayIcon, handleClick };
};
