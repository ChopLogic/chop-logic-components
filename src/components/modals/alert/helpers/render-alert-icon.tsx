import CheckMarkIcon from 'components/misc/icon/elements/CheckMark';
import ErrorIcon from 'components/misc/icon/elements/Error';
import HelpIcon from 'components/misc/icon/elements/Help';
import InfoIcon from 'components/misc/icon/elements/Info';
import WarningIcon from 'components/misc/icon/elements/Warning';
import ChopLogicIcon, { CLIcon } from 'components/misc/icon/Icon';

import { ChopLogicAlertMode } from '../Alert';

export function renderAlertIcon(mode: ChopLogicAlertMode, icon?: CLIcon): React.ReactElement | null {
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
