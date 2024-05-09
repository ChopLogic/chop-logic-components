import React, { MouseEventHandler } from 'react';
import 'assets/common.module.css';
import styles from './styles.module.css';
import createClassName from 'utils/create-class-name';

export type ChopLogicButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | (() => void);
  view?: 'primary' | 'secondary';
  disabled?: boolean;
};

const Button: React.FC<ChopLogicButtonProps> = ({ disabled, onClick, text = 'Ok', type = 'button', view = 'primary', ...props }) => {
  const buttonClass = createClassName([
    styles.button,
    props?.className,
    { [styles.primary]: view === 'primary', [styles.secondary]: view === 'secondary', [styles.disabled]: !!disabled },
  ]);

  return (
    <button type={type} className={buttonClass} onClick={disabled ? undefined : onClick} disabled={disabled} {...props}>
      {text}
    </button>
  );
};

export default Button;
