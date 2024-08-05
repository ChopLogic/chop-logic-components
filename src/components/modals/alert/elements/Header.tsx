import React from 'react';
import { Icon } from 'enums/icon';
import createClassName from 'utils/create-class-name';

import ChopLogicButton from 'components/inputs/button/Button';

import { getAlertIcon } from '../helpers/get-alert-icon';
import { getAlertTitle } from '../helpers/get-alert-title';
import { ChopLogicAlertMode } from '../types';

import '../Alert.scss';

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
      <ChopLogicButton icon={Icon.Cancel} view='icon' aria-label='Close alert popup' onClick={onClose} className='cl-alert__close-button' />
    </header>
  );
};

export default ChopLogicAlertHeader;
