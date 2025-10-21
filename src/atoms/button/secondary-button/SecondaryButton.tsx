import { getClassName } from '@utils';
import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import styles from './SecondaryButton.module.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren;

export const SecondaryButton: FC<Props> = ({ children, className, ...rest }) => (
  <button {...rest} className={getClassName([styles.button, className])}>
    {children}
  </button>
);
