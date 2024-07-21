import { Icon } from 'enums/icon';
import { ChopLogicAlertMode } from '../types';

export function getAlertIcon(mode: ChopLogicAlertMode): Icon {
  switch (mode) {
    case 'info':
      return Icon.Info;
    case 'warning':
      return Icon.Info;
    case 'error':
      return Icon.Info;
    case 'success':
      return Icon.Checked;
    default:
      return Icon.Info;
  }
}
