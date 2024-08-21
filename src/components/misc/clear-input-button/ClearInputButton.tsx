import React from 'react';

import ChopLogicIcon, { CLIcon } from 'components/misc/icon/Icon';

import { StyledClearButton } from './ClearInputButton.styled';

const ClearInputButton: React.FC<{ onClear: () => void }> = ({ onClear }) => {
  return (
    <StyledClearButton onClick={onClear}>
      <ChopLogicIcon name={CLIcon.Remove} />
    </StyledClearButton>
  );
};

export default ClearInputButton;
