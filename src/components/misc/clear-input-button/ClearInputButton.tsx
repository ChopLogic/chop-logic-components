import React from 'react';

import ChopLogicIcon, { CLIcon } from 'components/misc/icon/Icon';

import { StyledClearButton } from './ClearInputButton.styled';

type ClearInputButtonProps = {
  onClear: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
};

const ClearInputButton: React.FC<ClearInputButtonProps> = ({ onClear, label }) => {
  return (
    <StyledClearButton onClick={onClear} aria-label={`Clear the input for ${label}`} type='button'>
      <ChopLogicIcon name={CLIcon.Remove} />
    </StyledClearButton>
  );
};

export default ClearInputButton;
