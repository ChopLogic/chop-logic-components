import { getClassName } from '@utils';
import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import './PrimaryButton.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren;

export const PrimaryButton: FC<Props> = ({ children, className, ...rest }) => (
  <button {...rest} className={getClassName(['cl-primary-button', className])}>
    <span className="cl-primary-button__shadow"></span>
    <span className="cl-primary-button__edge"></span>
    <span className="cl-primary-button__front">{children}</span>
  </button>
);
