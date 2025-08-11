import { AlertMode, IconName } from '@enums';

import { ChopLogicComponentProps } from './_common';

export interface ChopLogicAlertProps extends ChopLogicComponentProps {
  isOpened: boolean;
  onClose: () => void;
  message: string;
  mode?: AlertMode;
  icon?: IconName;
  autoClose?: boolean;
  autoCloseDelay?: number;
}
