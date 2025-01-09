import React from 'react';
import { ChopLogicButton } from '@components';
import { ChopLogicButtonView, ChopLogicIconName } from '@enums';
import { ChopLogicTheme } from '@models';

import { StyledDialogHeader } from '../Dialog.styled';

const ChopLogicModalLayoutHeader: React.FC<{
  title: string;
  onClose: () => void;
  theme: ChopLogicTheme;
}> = ({ title, onClose, theme }): React.ReactElement => {
  return (
    <StyledDialogHeader $theme={theme}>
      {title}
      <ChopLogicButton icon={ChopLogicIconName.Cancel} view={ChopLogicButtonView.Icon} label='Close modal window' onClick={onClose} />
    </StyledDialogHeader>
  );
};

export default ChopLogicModalLayoutHeader;
