import { getClassName } from '@utils';
import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import './IconButton.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren;

export const IconButton: FC<Props> = ({ children, className, ...rest }) => (
  <button {...rest} className={getClassName(['cl-icon-button', className])}>
    {children}
  </button>
);
