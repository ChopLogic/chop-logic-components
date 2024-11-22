import React from 'react';

import ChopLogicIcon, { ChopLogicIconName } from 'components/misc/icon/Icon';

import { StyledInputInnerButton } from './InputInnerButton.styled';

type ClearInputButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  icon: ChopLogicIconName;
  disabled?: boolean;
};

const InputInnerButton: React.FC<ClearInputButtonProps> = ({ onClick, label, icon, disabled }) => {
  return (
    <StyledInputInnerButton onClick={onClick} aria-label={label} type='button' disabled={disabled}>
      <ChopLogicIcon name={icon} />
    </StyledInputInnerButton>
  );
};

export default InputInnerButton;
