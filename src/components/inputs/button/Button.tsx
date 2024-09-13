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
  extended?: boolean;
};

const ChopLogicButton: React.FC<ChopLogicButtonProps> = ({
  onClick,
  text,
  icon,
  label,
  disabled = false,
  extended = false,
  type = 'button',
  view = 'primary',
  ...props
}) => {
  return (
    <StyledButton
      $view={view}
      $disabled={disabled}
      $extended={extended}
      aria-label={label}
      type={type}
      onClick={onClick}
      disabled={disabled}
      id={props?.id}
      className={props?.className}
      style={props?.style}
      tabIndex={props?.tabIndex}
    >
      <ChopLogicIcon name={icon} />
      {view !== 'icon' && <StyledButtonText>{text}</StyledButtonText>}
    </StyledButton>
  );
};

export default ChopLogicButton;
