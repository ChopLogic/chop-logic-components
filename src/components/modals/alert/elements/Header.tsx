import React from 'react';

import ChopLogicButton from 'components/inputs/button/Button';
import { CLIcon } from 'components/misc/icon/Icon';

import { ChopLogicAlertMode } from '../Alert';
import { StyledAlertHeader } from '../Alert.styled';
import { getAlertTitle } from '../helpers/get-alert-title';
import { renderAlertIcon } from '../helpers/render-alert-icon';

type ChopLogicAlertHeaderProps = {
  onClose: () => void;
  mode: ChopLogicAlertMode;
  title?: string;
  icon?: CLIcon;
};

const ChopLogicAlertHeader: React.FC<ChopLogicAlertHeaderProps> = ({ title, onClose, mode, icon }) => {
  const alertTitle = getAlertTitle(mode, title);
  const alertIcon = renderAlertIcon(mode, icon);

  return (
    <StyledAlertHeader>
      <h3>
        {alertIcon}
        {alertTitle}
      </h3>
      <ChopLogicButton icon={CLIcon.Cancel} view='icon' label='Close alert popup' onClick={onClose} />
    </StyledAlertHeader>
  );
};

export default ChopLogicAlertHeader;
