import React from 'react';

import { ChopLogicButton } from 'components/index';
import { ChopLogicIconName } from 'components/misc/icon/Icon';

import { StyledDialogHeader } from '../Dialog.styled';

const ChopLogicModalLayoutHeader: React.FC<{
  title: string;
  onClose: () => void;
}> = ({ title, onClose }): React.ReactElement => {
  return (
    <StyledDialogHeader>
      {title}
      <ChopLogicButton icon={ChopLogicIconName.Cancel} view='icon' label='Close modal window' onClick={onClose} />
    </StyledDialogHeader>
  );
};

export default ChopLogicModalLayoutHeader;
