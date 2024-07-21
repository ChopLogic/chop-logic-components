import React from 'react';
import 'styles';
import '../Alert.styles.css';
import { Icon } from 'enums/icon';
import ChopLogicButton from 'components/controls/button/Button';
import { ChopLogicAlertMode } from '../types';
import { getAlertTitle } from '../helpers/get-alert-title';
import { getAlertIcon } from '../helpers/get-alert-icon';
import createClassName from 'utils/create-class-name';

type ChopLogicAlertHeaderProps = {
  onClose: () => void;
  title?: string;
  mode: ChopLogicAlertMode;
};

const ChopLogicAlertHeader: React.FC<ChopLogicAlertHeaderProps> = ({ title, onClose, mode }) => {
  const alertTitle = getAlertTitle(mode, title);
  const alertIcon = getAlertIcon(mode);
  const titleClass = createClassName(['cl-alert__title', alertIcon]);

  return (
    <header className='cl-alert__header'>
      <h3 className={titleClass}>{alertTitle}</h3>
      <ChopLogicButton icon={Icon.Cancel} view='icon' aria-label='Close alert popup' onClick={onClose} />
    </header>
  );
};

export default ChopLogicAlertHeader;
