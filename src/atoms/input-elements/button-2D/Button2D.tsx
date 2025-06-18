import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import styles from './Button2D.module.scss';
import { getClassName } from '@utils';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren;

const Button2D: FC<Props> = ({ children, className, ...rest }) => (
  <button {...rest} className={getClassName([styles.button, className])}>
    {children}
  </button>
);

export default Button2D;
