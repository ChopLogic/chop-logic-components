import React, { MouseEventHandler } from 'react';
import styles from './styles.module.css';

export type ChopLogicButtonProps = {
  text?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ChopLogicButtonProps> = ({ disabled, text, onClick, ...props }) => {
  return (
    <button type='button' className={styles.button} onClick={onClick} disabled={disabled} {...props}>
      {text}
    </button>
  );
};

export default Button;
