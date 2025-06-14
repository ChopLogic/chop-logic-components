import React from 'react';
import { ChopLogicAlertMode, ChopLogicButtonView, ChopLogicIconName } from '@enums';
import styles from './AlertHeader.module.scss';
import { getAlertTitle, renderAlertIcon } from '../Alert.helpers.tsx';
import { ChopLogicButton } from '@molecules';

type AlertHeaderProps = {
  onClose: () => void;
  mode: ChopLogicAlertMode;
  title?: string;
  icon?: ChopLogicIconName;
};

const AlertHeader: React.FC<AlertHeaderProps> = ({ title, onClose, mode, icon }) => {
  const alertTitle = getAlertTitle(mode, title);
  const alertIcon = renderAlertIcon(mode, icon);

  return (
    <header className={styles.header}>
      <h3>
        {alertIcon}
        {alertTitle}
      </h3>
      <ChopLogicButton icon={ChopLogicIconName.Cancel} view={ChopLogicButtonView.Icon} label='Close alert popup' onClick={onClose} />
    </header>
  );
};

export default AlertHeader;
