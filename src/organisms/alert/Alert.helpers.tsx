import { ChopLogicAlertMode, ChopLogicIconName } from '@enums';

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

export function getAlertIcon(mode: ChopLogicAlertMode, icon?: ChopLogicIconName): ChopLogicIconName | undefined {
  if (icon) {
    return icon;
  }

  switch (mode) {
    case ChopLogicAlertMode.Info:
      return ChopLogicIconName.Info;
    case ChopLogicAlertMode.Warning:
      return ChopLogicIconName.Warning;
    case ChopLogicAlertMode.Error:
      return ChopLogicIconName.Error;
    case ChopLogicAlertMode.Success:
      return ChopLogicIconName.CheckboxChecked;
    case ChopLogicAlertMode.Help:
      return ChopLogicIconName.Help;
    default:
      return;
  }
}
