import React from 'react';

import { ChopLogicIcon } from '@/elements';
import { ChopLogicAlertMode, ChopLogicIconName } from '@/enums';
import CheckMarkIcon from '@/icons/CheckMarkIcon';
import ErrorIcon from '@/icons/ErrorIcon';
import HelpIcon from '@/icons/HelpIcon';
import InfoIcon from '@/icons/InfoIcon';
import WarningIcon from '@/icons/WarningIcon';

export function getAlertTitle(mode: ChopLogicAlertMode, title?: string): string {
  if (title) return title;

  switch (mode) {
    case 'info':
      return 'Info';
    case 'warning':
      return 'Warning';
    case 'error':
      return 'Error';
    case 'success':
      return 'Success';
    default:
      return '';
  }
}

export function renderAlertIcon(mode: ChopLogicAlertMode, icon?: ChopLogicIconName): React.ReactElement | null {
  if (icon) {
    return <ChopLogicIcon name={icon} />;
  }

  switch (mode) {
    case 'info':
      return <InfoIcon />;
    case 'warning':
      return <WarningIcon />;
    case 'error':
      return <ErrorIcon />;
    case 'success':
      return <CheckMarkIcon />;
    case 'help':
      return <HelpIcon />;
    default:
      return null;
  }
}
