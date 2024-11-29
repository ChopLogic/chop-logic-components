import React from 'react';
import { ThemeProvider } from 'styled-components';

import { ChopLogicIcon } from '@/elements';
import { ChopLogicButtonProps } from '@/types';
import { getChopLogicTheme } from '@/utils';

import { Styled3DButton, StyledFlatButton, StyledIconButton } from './Button.styled';

const ChopLogicButton: React.FC<ChopLogicButtonProps> = ({
  onClick,
  text,
  icon,
  label,
  disabled = false,
  extended = false,
  type = 'button',
  view = '3D',
  theme,
  ...rest
}) => {
  const themeValues = getChopLogicTheme(theme);

  switch (view) {
    case '3D':
      return (
        <ThemeProvider theme={themeValues}>
          <Styled3DButton $extended={extended} aria-label={label} type={type} onClick={onClick} disabled={disabled} {...rest}>
            <span className='chop-logic-button_shadow'></span>
            <span className='chop-logic-button_edge'></span>
            <span className='chop-logic-button_front'>
              <ChopLogicIcon name={icon} />
              {text}
            </span>
          </Styled3DButton>
        </ThemeProvider>
      );
    case 'flat':
      return (
        <ThemeProvider theme={themeValues}>
          <StyledFlatButton $extended={extended} aria-label={label} type={type} onClick={onClick} disabled={disabled} {...rest}>
            <ChopLogicIcon name={icon} />
            {text}
          </StyledFlatButton>
        </ThemeProvider>
      );
    case 'icon':
      return (
        <ThemeProvider theme={themeValues}>
          <StyledIconButton aria-label={label} type={type} onClick={onClick} disabled={disabled} {...rest}>
            <ChopLogicIcon name={icon} />
          </StyledIconButton>
        </ThemeProvider>
      );
    default:
      return null;
  }
};

export default ChopLogicButton;
