import React from 'react';
import { ChopLogicIcon } from '@elements';
import { ChopLogicAlertMode, ChopLogicIconName } from '@enums';
import CheckMarkIcon from '@assets/icons/svg/CheckMarkIcon.tsx';
import ErrorIcon from '@assets/icons/svg/ErrorIcon.tsx';
import HelpIcon from '@assets/icons/svg/HelpIcon.tsx';
import InfoIcon from '@assets/icons/svg/InfoIcon.tsx';
import WarningIcon from '@assets/icons/svg/WarningIcon.tsx';

export function getAlertTitle(mode: ChopLogicAlertMode, title?: string): string {
  if (title) return title;

  switch (mode) {
    case ChopLogicAlertMode.Info:
      return 'For your information';
    case ChopLogicAlertMode.Warning:
      return 'Please pay attention';
    case ChopLogicAlertMode.Error:
      return 'Something went wrong';
    case ChopLogicAlertMode.Success:
      return 'Everything is okay';
    case ChopLogicAlertMode.Help:
      return 'Useful tip';
    default:
      return 'Alert';
  }
}

export function renderAlertIcon(mode: ChopLogicAlertMode, icon?: ChopLogicIconName): React.ReactElement | null {
  if (icon) {
    return <ChopLogicIcon name={icon} />;
  }

  switch (mode) {
    case ChopLogicAlertMode.Info:
      return <InfoIcon />;
    case ChopLogicAlertMode.Warning:
      return <WarningIcon />;
    case ChopLogicAlertMode.Error:
      return <ErrorIcon />;
    case ChopLogicAlertMode.Success:
      return <CheckMarkIcon />;
    case ChopLogicAlertMode.Help:
      return <HelpIcon />;
    default:
      return null;
  }
}
