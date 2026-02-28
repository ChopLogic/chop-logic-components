import {
  type ForwardRefRenderFunction,
  forwardRef,
  type InputHTMLAttributes,
  type PropsWithChildren,
} from 'react';

import './Input.css';

type Props = InputHTMLAttributes<HTMLInputElement> & PropsWithChildren;

const Input: ForwardRefRenderFunction<HTMLInputElement, Props> = ({ children, ...rest }, ref) => {
  return (
    <div className="cl-input__wrapper">
      <input {...rest} className="cl-input__field" ref={ref} />
      {children}
    </div>
  );
};

export default forwardRef(Input);
