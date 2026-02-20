import { getClassName } from '@utils';
import type { FC } from 'react';
import './PrimaryButton.css';
import { Icon } from '@components/atoms';
import { ElementSize } from '@enums';
import type { ButtonProps } from '@types';

export const PrimaryButton: FC<ButtonProps> = ({
  icon,
  text,
  className,
  iconSize = ElementSize.Small,
  ...rest
}) => (
  <button {...rest} className={getClassName(['cl-primary-button', className])}>
    {icon && <Icon name={icon} className="cl-primary-button__icon" size={iconSize} />}
    <span className="cl-primary-button__text">{text}</span>
  </button>
);
