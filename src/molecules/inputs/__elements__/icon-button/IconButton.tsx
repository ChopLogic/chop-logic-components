import { getClassName } from '@utils';
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import styles from './IconButton.module.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren;

export const IconButton: FC<Props> = ({ children, className, ...rest }) => (
  <button {...rest} className={getClassName([styles.button, className])}>
    {children}
  </button>
);
