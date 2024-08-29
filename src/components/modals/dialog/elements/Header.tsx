import React from 'react';

import { ChopLogicButton } from 'components/index';
import { CLIcon } from 'components/misc/icon/Icon';

import { StyledDialogHeader } from '../Dialog.styled';

type ChopLogicModalLayoutHeaderProps = {
  title: string;
  onClose: () => void;
};

const ChopLogicModalLayoutHeader: React.FC<ChopLogicModalLayoutHeaderProps> = ({ title, onClose }): React.ReactElement => {
  return (
    <StyledDialogHeader>
      {title}
      <ChopLogicButton icon={CLIcon.Cancel} view='icon' label='Close modal window' onClick={onClose} />
    </StyledDialogHeader>
  );
};

export default ChopLogicModalLayoutHeader;
