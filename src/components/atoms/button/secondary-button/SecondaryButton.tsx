import { getClassName } from '@utils';
import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import './SecondaryButton.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren;

export const SecondaryButton: FC<Props> = ({ children, className, ...rest }) => (
  <button {...rest} className={getClassName(['cl-secondary-button', className])}>
    {children}
  </button>
);
