import React from 'react';

import ChopLogicIcon, { CLIcon } from 'components/misc/icon/Icon';

import { StyledClearButton } from './ClearInputButton.styled';

const ClearInputButton: React.FC<{ onClear: () => void; visible: boolean }> = ({ onClear, visible }) => {
  return (
    <StyledClearButton onClick={onClear} $visible={visible} aria-label='Clear the input'>
      <ChopLogicIcon name={CLIcon.Remove} />
    </StyledClearButton>
  );
};

export default ClearInputButton;
