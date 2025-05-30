import { FC, InputHTMLAttributes, PropsWithChildren } from 'react';
import styles from './Input.module.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement> & PropsWithChildren;

const Input: FC<InputProps> = ({ children, ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <input {...rest} className={styles.input} />
      {children}
    </div>
  );
};

export default Input;
