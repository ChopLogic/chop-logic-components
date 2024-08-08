import CheckMarkIcon from 'assets/icons/CheckMark';
import ErrorIcon from 'assets/icons/Error';
import HelpIcon from 'assets/icons/Help';
import InfoIcon from 'assets/icons/Info';
import WarningIcon from 'assets/icons/Warning';

import { ChopLogicAlertMode } from '../types';

export function renderAlertIcon(mode: ChopLogicAlertMode): React.ReactElement | null {
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
