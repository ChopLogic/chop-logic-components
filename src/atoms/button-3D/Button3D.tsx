import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import styles from './Button3D.module.scss';
import { getClassName } from '@utils';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren;

const Button3D: FC<Props> = ({ children, className, ...rest }) => (
  <button {...rest} className={getClassName([styles.button, className])}>
    <span className={styles.button_shadow}></span>
    <span className={styles.button_edge}></span>
    <span className={styles.button_front}>{children}</span>
  </button>
);

export default Button3D;
