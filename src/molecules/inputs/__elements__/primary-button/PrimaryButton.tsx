import { getClassName } from '@utils';
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import styles from './PrimaryButton.module.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren;

export const PrimaryButton: FC<Props> = ({ children, className, ...rest }) => (
  <button {...rest} className={getClassName([styles.button, className])}>
    <span className={styles.button_shadow}></span>
    <span className={styles.button_edge}></span>
    <span className={styles.button_front}>{children}</span>
  </button>
);
