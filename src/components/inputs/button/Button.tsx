import React, { MouseEventHandler } from 'react';

import ChopLogicIcon, { CLIcon } from 'components/misc/icon/Icon';

import { StyledButton, StyledButtonText } from './Button.styled';

export type ChopLogicButtonView = 'primary' | 'secondary' | 'danger' | 'icon';

export type ChopLogicButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: MouseEventHandler<HTMLButtonElement> | (() => void);
  view?: ChopLogicButtonView;
  label?: string;
  icon?: CLIcon;
  text?: string;
};

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
