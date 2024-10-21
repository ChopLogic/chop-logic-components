import React from 'react';

import ChopLogicIcon, { ChopLogicIconName } from 'components/misc/icon/Icon';

import { StyledInputInnerButton } from './InputInnerButton.styled';

type ClearInputButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  icon: ChopLogicIconName;
};

const InputInnerButton: React.FC<ClearInputButtonProps> = ({ onClick, label, icon }) => {
  return (
    <StyledInputInnerButton onClick={onClick} aria-label={label} type='button'>
      <ChopLogicIcon name={icon} />
    </StyledInputInnerButton>
  );
};

export default InputInnerButton;
