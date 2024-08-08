import React from 'react';

import ChopLogicButton from 'components/inputs/button/Button';

import { StyledAlertHeader } from '../Alert.styled';
import { getAlertTitle } from '../helpers/get-alert-title';
import { renderAlertIcon } from '../helpers/render-alert-icon';
import { ChopLogicAlertMode } from '../types';

type ChopLogicAlertHeaderProps = {
  onClose: () => void;
  title?: string;
  mode: ChopLogicAlertMode;
};

const ChopLogicAlertHeader: React.FC<ChopLogicAlertHeaderProps> = ({ title, onClose, mode }) => {
  const alertTitle = getAlertTitle(mode, title);
  const alertIcon = renderAlertIcon(mode);

  return (
    <StyledAlertHeader>
      <h3>
        {alertIcon}
        {alertTitle}
      </h3>
      <ChopLogicButton icon='cancel' view='icon' aria-label='Close alert popup' onClick={onClose} />
    </StyledAlertHeader>
  );
};

export default ChopLogicAlertHeader;
