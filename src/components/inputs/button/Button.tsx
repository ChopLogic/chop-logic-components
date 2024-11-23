import React from 'react';
import { ThemeProvider } from 'styled-components';
import { getChopLogicTheme } from 'utils/get-chop-logic-theme.ts';

import ChopLogicIcon from 'components/misc/icon/Icon';

import { StyledButton } from './Button.styled';
import { ChopLogicButtonProps } from './types';

const ChopLogicButton: React.FC<ChopLogicButtonProps> = ({
  onClick,
  text,
  icon,
  label,
  disabled = false,
  extended = false,
  type = 'button',
  view = 'primary',
  theme,
  ...rest
}) => {
  const themeValues = getChopLogicTheme(theme);

  return (
    <ThemeProvider theme={themeValues}>
      <StyledButton
        $view={view}
        $disabled={disabled}
        $extended={extended}
        aria-label={label}
        type={type}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        <span className='chop-logic-button_shadow'></span>
        <span className='chop-logic-button_edge'></span>
        <span className='chop-logic-button_front'>
          <ChopLogicIcon name={icon} />
          {text}
        </span>
      </StyledButton>
    </ThemeProvider>
  );
};

export default ChopLogicButton;
