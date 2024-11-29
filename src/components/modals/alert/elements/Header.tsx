import React from 'react';

import { ChopLogicButton } from '@/components';
import { ChopLogicIconName } from '@/enums';
import { ChopLogicAlertHeaderProps } from '@/types';

import { StyledAlertHeader } from '../Alert.styled';
import { getAlertTitle, renderAlertIcon } from '../helpers';

const ChopLogicAlertHeader: React.FC<ChopLogicAlertHeaderProps> = ({ title, onClose, mode, icon }) => {
  const alertTitle = getAlertTitle(mode, title);
  const alertIcon = renderAlertIcon(mode, icon);

  return (
    <StyledAlertHeader>
      <h3>
        {alertIcon}
        {alertTitle}
      </h3>
      <ChopLogicButton icon={ChopLogicIconName.Cancel} view='icon' label='Close alert popup' onClick={onClose} />
    </StyledAlertHeader>
  );
};

export default ChopLogicAlertHeader;
