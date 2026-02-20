import { getClassName } from '@utils';
import type { FC } from 'react';
import './SecondaryButton.css';
import { Icon } from '@components/atoms';
import { ElementSize } from '@enums';
import type { ButtonProps } from '@types';

export const SecondaryButton: FC<ButtonProps> = ({ icon, text, className, ...rest }) => (
  <button {...rest} className={getClassName(['cl-secondary-button', className])}>
    {icon && <Icon name={icon} className="cl-secondary-button__icon" size={ElementSize.Small} />}
    <span className="cl-secondary-button__text">{text}</span>
  </button>
);
