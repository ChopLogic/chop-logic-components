import React from 'react';

import ChopLogicIcon from 'components/misc/icon/Icon';

import { StyledButton, StyledButtonText } from './Button.styled';
import { ChopLogicButtonProps } from './types';

const ChopLogicButton: React.FC<ChopLogicButtonProps> = ({
  onClick,
  text,
  icon,
  label,
  disabled = false,
  type = 'button',
  view = 'primary',
  ...props
}) => {
  return (
    <StyledButton aria-label={label} type={type} onClick={onClick} disabled={disabled} $view={view} $disabled={disabled} {...props}>
      <ChopLogicIcon name={icon} />
      {view !== 'icon' && <StyledButtonText>{text}</StyledButtonText>}
    </StyledButton>
  );
};

export default ChopLogicButton;
