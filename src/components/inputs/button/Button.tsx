import React from 'react';

import { renderButtonIcon } from './helpers/render-button-icon';
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
      {renderButtonIcon(icon)}
      {view !== 'icon' && <StyledButtonText>{text}</StyledButtonText>}
    </StyledButton>
  );
};

export default ChopLogicButton;
