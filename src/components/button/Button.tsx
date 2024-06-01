import React, { MouseEventHandler } from 'react';
import styles from './styles.module.css';
import 'assets/icons.css';
import 'assets/common.module.css';
import createClassName from 'utils/create-class-name';
import { Icon } from 'enums/icon';

export type ChopLogicButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | (() => void);
  view?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  icon?: Icon;
};

const Button: React.FC<ChopLogicButtonProps> = ({ disabled, onClick, text = 'Ok', type = 'button', view = 'primary', icon, ...props }) => {
  const buttonClass = createClassName([
    styles.button,
    props?.className,
    {
      [styles.primary]: view === 'primary',
      [styles.secondary]: view === 'secondary',
      [styles.danger]: view === 'danger',
      [styles.disabled]: !!disabled,
    },
  ]);

  return (
    <button type={type} className={buttonClass} onClick={disabled ? undefined : onClick} disabled={disabled} {...props}>
      {icon && <span className={icon}></span>}
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default Button;
