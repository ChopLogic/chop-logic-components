import React, { MouseEventHandler } from 'react';
import styles from './styles.module.css';
import createClassName from 'utils/create-class-name';
import { Icon } from 'enums/icon';
import 'styles';

export type ChopLogicButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | (() => void);
  view?: 'primary' | 'secondary' | 'danger' | 'icon';
  disabled?: boolean;
  icon?: Icon;
  label?: string;
};

const Button: React.FC<ChopLogicButtonProps> = ({ disabled, onClick, text, type = 'button', view = 'primary', icon, label, ...props }) => {
  const buttonClass = createClassName([
    styles.button,
    props?.className,
    {
      [styles.primary]: view === 'primary',
      [styles.secondary]: view === 'secondary',
      [styles.danger]: view === 'danger',
      [styles.icon]: view === 'icon',
      [styles.disabled]: !!disabled,
    },
  ]);

  return (
    <button aria-label={label} type={type} className={buttonClass} onClick={disabled ? undefined : onClick} disabled={disabled} {...props}>
      {icon && <span className={icon} aria-hidden='true'></span>}
      {view !== 'icon' && <span className={styles.text}>{text}</span>}
    </button>
  );
};

export default Button;
