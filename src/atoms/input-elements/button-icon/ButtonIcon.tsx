import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import styles from './ButtonIcon.module.scss';
import { getClassName } from '@utils';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren;

const ButtonIcon: FC<Props> = ({ children, className, ...rest }) => (
  <button {...rest} className={getClassName([styles.button, className])}>
    {children}
  </button>
);

export default ButtonIcon;
