import type { AlertMode, IconName } from '@enums';

import type { ChopLogicComponentProps } from './_common';

export interface AlertProps extends ChopLogicComponentProps {
  isOpened: boolean;
  onClose: () => void;
  message: string;
  mode?: AlertMode;
  icon?: IconName;
  autoClose?: boolean;
  autoCloseDelay?: number;
}
