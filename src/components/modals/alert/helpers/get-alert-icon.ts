import { Icon } from 'enums/icon';

import { ChopLogicAlertMode } from '../types';

export function getAlertIcon(mode: ChopLogicAlertMode): Icon {
  switch (mode) {
    case 'info':
      return Icon.Notification;
    case 'warning':
      return Icon.Warning;
    case 'error':
      return Icon.Bomb;
    case 'success':
      return Icon.CheckMark;
    case 'help':
      return Icon.Support;
    default:
      return Icon.Info;
  }
}
