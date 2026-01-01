import {
  type ForwardRefRenderFunction,
  forwardRef,
  type InputHTMLAttributes,
  type PropsWithChildren,
} from 'react';

import styles from './Input.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement> & PropsWithChildren;

const Input: ForwardRefRenderFunction<HTMLInputElement, Props> = ({ children, ...rest }, ref) => {
  return (
    <div className={styles.wrapper}>
      <input {...rest} className={styles.input} ref={ref} />
      {children}
    </div>
  );
};

export default forwardRef(Input);
