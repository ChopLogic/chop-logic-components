import React from 'react';
import createClassName from 'utils/create-class-name';
import { ChopLogicButtonProps } from './types';
import './Button.styles.css';

const ChopLogicButton: React.FC<ChopLogicButtonProps> = ({
  disabled,
  onClick,
  text,
  type = 'button',
  view = 'primary',
  icon,
  label,
  ...props
}) => {
  const buttonClass = createClassName([
    'cl-button',
    props?.className,
    {
      'cl-button_primary': view === 'primary',
      'cl-button_secondary': view === 'secondary',
      'cl-button_danger': view === 'danger',
      'cl-button_icon': view === 'icon',
      'cl-button_disabled': !!disabled,
    },
  ]);

  return (
    <button aria-label={label} type={type} className={buttonClass} onClick={onClick} disabled={disabled} {...props}>
      {icon && <span className={icon} aria-hidden='true'></span>}
      {view !== 'icon' && <span className='cl-button__text'>{text}</span>}
    </button>
  );
};

export default ChopLogicButton;
