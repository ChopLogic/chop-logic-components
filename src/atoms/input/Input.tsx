import { FC, InputHTMLAttributes, PropsWithChildren } from 'react';

import styles from './Input.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement> & PropsWithChildren;

const Input: FC<Props> = ({ children, ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <input {...rest} className={styles.input} />
      {children}
    </div>
  );
};

export default Input;
