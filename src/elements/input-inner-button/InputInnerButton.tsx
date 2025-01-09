import React from 'react';
import { ChopLogicIcon } from '@elements';
import { ChopLogicIconName } from '@enums';
import { ChopLogicTheme } from '@models';

import { StyledInputInnerButton } from './InputInnerButton.styled';

type ClearInputButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  icon: ChopLogicIconName;
  disabled?: boolean;
  theme: ChopLogicTheme;
};

const InputInnerButton: React.FC<ClearInputButtonProps> = ({ onClick, label, icon, disabled, theme }) => {
  return (
    <StyledInputInnerButton onClick={onClick} aria-label={label} type='button' disabled={disabled} $theme={theme}>
      <ChopLogicIcon name={icon} />
    </StyledInputInnerButton>
  );
};

export default InputInnerButton;
