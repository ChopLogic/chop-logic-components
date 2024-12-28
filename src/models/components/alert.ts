import { ChopLogicAlertMode, ChopLogicIconName } from '@/enums';

import { ChopLogicComponentProps } from '../common.ts';

export interface ChopLogicAlertProps extends ChopLogicComponentProps {
  isOpened: boolean;
  onClose: () => void;
  message: string;
  mode?: ChopLogicAlertMode;
  icon?: ChopLogicIconName;
}
