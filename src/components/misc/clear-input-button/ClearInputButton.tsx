import React from 'react';

import ChopLogicIcon, { CLIcon } from 'components/misc/icon/Icon';

import { StyledClearButton } from './ClearInputButton.styled';

type ClearInputButtonProps = {
  onClear: () => void;
  visible: boolean;
  label: string;
};

const ClearInputButton: React.FC<ClearInputButtonProps> = ({ onClear, visible, label }) => {
  return (
    <StyledClearButton onClick={onClear} $visible={visible} aria-label={`Clear the input for ${label}`}>
      <ChopLogicIcon name={CLIcon.Remove} />
    </StyledClearButton>
  );
};

export default ClearInputButton;
