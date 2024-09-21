import React from 'react';

import ChopLogicIcon, { CLIcon } from 'components/misc/icon/Icon';

import { StyledInputInnerButton } from './InputInnerButton.styled';

type ClearInputButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  icon: CLIcon;
};

const InputInnerButton: React.FC<ClearInputButtonProps> = ({ onClick, label, icon }) => {
  return (
    <StyledInputInnerButton onClick={onClick} aria-label={label} type='button'>
      <ChopLogicIcon name={icon} />
    </StyledInputInnerButton>
  );
};

export default InputInnerButton;
