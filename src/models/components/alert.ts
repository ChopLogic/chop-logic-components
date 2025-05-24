import { ChopLogicAlertMode, ChopLogicIconName } from '@enums';

import { ChopLogicComponentProps } from '../common';

export interface ChopLogicAlertProps extends ChopLogicComponentProps {
  isOpened: boolean;
  onClose: () => void;
  message: string;
  mode?: ChopLogicAlertMode;
  icon?: ChopLogicIconName;
}
