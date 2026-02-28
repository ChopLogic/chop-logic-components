import { AlertMode, IconName } from '@enums';

export function getAlertTitle(mode: AlertMode, title?: string): string {
  if (title) return title;

  switch (mode) {
    case AlertMode.Info:
      return 'For your information';
    case AlertMode.Warning:
      return 'Please pay attention';
    case AlertMode.Error:
      return 'Something went wrong';
    case AlertMode.Success:
      return 'Everything is okay';
    case AlertMode.Help:
      return 'Useful tip';
    default:
      return 'Alert';
  }
}

export function getAlertIcon(mode: AlertMode, icon?: IconName): IconName | undefined {
  if (icon) {
    return icon;
  }

  switch (mode) {
    case AlertMode.Info:
      return IconName.Info;
    case AlertMode.Warning:
      return IconName.AlertTriangle;
    case AlertMode.Error:
      return IconName.XOctagon;
    case AlertMode.Success:
      return IconName.CheckCircle;
    case AlertMode.Help:
      return IconName.LifeBuoy;
    default:
      return;
  }
}
