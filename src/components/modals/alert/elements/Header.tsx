import React from 'react';
import { ChopLogicButton } from '@components';
import { ChopLogicAlertMode, ChopLogicButtonView, ChopLogicIconName } from '@enums';
import { ChopLogicTheme } from '@models';

import { StyledAlertHeader } from '../Alert.styled';
import { getAlertTitle, renderAlertIcon } from '../helpers';

type ChopLogicAlertHeaderProps = {
  onClose: () => void;
  theme: ChopLogicTheme;
  mode: ChopLogicAlertMode;
  title?: string;
  icon?: ChopLogicIconName;
};

const ChopLogicAlertHeader: React.FC<ChopLogicAlertHeaderProps> = ({ title, onClose, mode, icon, theme }) => {
  const alertTitle = getAlertTitle(mode, title);
  const alertIcon = renderAlertIcon(mode, icon);

  return (
    <StyledAlertHeader $theme={theme}>
      <h3>
        {alertIcon}
        {alertTitle}
      </h3>
      <ChopLogicButton icon={ChopLogicIconName.Cancel} view={ChopLogicButtonView.Icon} label='Close alert popup' onClick={onClose} />
    </StyledAlertHeader>
  );
};

export default ChopLogicAlertHeader;
