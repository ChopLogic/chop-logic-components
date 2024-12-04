import { ChopLogicAlertMode, ChopLogicIconName } from '@/enums';
import { ChopLogicTheme } from '@/types';

import { CommonComponentProps } from './_common';

export type ChopLogicAlertProps = CommonComponentProps & {
  isOpened: boolean;
  onClose: () => void;
  message: string;
  mode?: ChopLogicAlertMode;
  icon?: ChopLogicIconName;
};

export type ChopLogicAlertHeaderProps = {
  onClose: () => void;
  theme: ChopLogicTheme;
  mode: ChopLogicAlertMode;
  title?: string;
  icon?: ChopLogicIconName;
};
