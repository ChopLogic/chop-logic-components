import React from 'react';

import { ChopLogicButton } from '@/components';
import { ChopLogicIconName } from '@/enums';
import { ChopLogicTheme } from '@/types';

import { StyledDialogHeader } from '../Dialog.styled';

const ChopLogicModalLayoutHeader: React.FC<{
  title: string;
  onClose: () => void;
  theme: ChopLogicTheme;
}> = ({ title, onClose, theme }): React.ReactElement => {
  return (
    <StyledDialogHeader $theme={theme}>
      {title}
      <ChopLogicButton icon={ChopLogicIconName.Cancel} view='icon' label='Close modal window' onClick={onClose} />
    </StyledDialogHeader>
  );
};

export default ChopLogicModalLayoutHeader;
