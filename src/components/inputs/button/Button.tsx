import React from 'react';

import { ChopLogicIcon } from '@/elements';
import { ChopLogicButtonView } from '@/enums';
import { withTooltip } from '@/hocs';
import { useChopLogicTheme } from '@/hooks';
import { ChopLogicButtonProps } from '@/types';

import { StyledFlatButton, StyledIconButton, StyledPrimaryButton } from './Button.styled';

const ChopLogicButton: React.FC<ChopLogicButtonProps> = ({
  onClick,
  text,
  icon,
  label,
  disabled = false,
  extended = false,
  type = 'button',
  view = ChopLogicButtonView.Primary,
  ...rest
}) => {
  const theme = useChopLogicTheme();

  switch (view) {
    case ChopLogicButtonView.Primary:
      return (
        <StyledPrimaryButton
          $extended={extended}
          aria-label={label}
          type={type}
          onClick={onClick}
          disabled={disabled}
          $theme={theme}
          {...rest}
        >
          <span className='chop-logic-button_shadow'></span>
          <span className='chop-logic-button_edge'></span>
          <span className='chop-logic-button_front'>
            <ChopLogicIcon name={icon} />
            {text}
          </span>
        </StyledPrimaryButton>
      );
    case ChopLogicButtonView.Flat:
      return (
        <StyledFlatButton
          $extended={extended}
          aria-label={label}
          type={type}
          onClick={onClick}
          disabled={disabled}
          $theme={theme}
          {...rest}
        >
          <ChopLogicIcon name={icon} />
          {text}
        </StyledFlatButton>
      );
    case ChopLogicButtonView.Icon:
      return (
        <StyledIconButton aria-label={label} type={type} onClick={onClick} disabled={disabled} $theme={theme} {...rest}>
          <ChopLogicIcon name={icon} />
        </StyledIconButton>
      );
    default:
      return null;
  }
};

export default withTooltip(ChopLogicButton);
