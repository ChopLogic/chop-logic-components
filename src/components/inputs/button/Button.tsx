import React from 'react';

import { getButtonIcon } from './helpers/get-button-icon';
import { ChopLogicButtonProps } from './types';

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
  return (
    <button aria-label={label} type={type} onClick={onClick} disabled={disabled} {...props}>
      {getButtonIcon(icon)}
      {view !== 'icon' && <span className='cl-button__text'>{text}</span>}
    </button>
  );
};

export default ChopLogicButton;
