import { Icon } from '@components/atoms';
import { ElementSize } from '@enums';
import { getClassName } from '@utils';
import type { FC } from 'react';
import './InnerButton.css';
import type { ButtonProps } from '@types';

export const InnerButton: FC<Omit<ButtonProps, 'text'>> = ({
  onClick,
  label,
  icon,
  disabled,
  className,
  iconSize = ElementSize.Small,
  ...rest
}) => {
  return (
    <button
      className={getClassName(['cl-inner-button', className])}
      onClick={onClick}
      aria-label={label}
      type="button"
      disabled={disabled}
      {...rest}
    >
      <Icon name={icon} size={iconSize} />
    </button>
  );
};
