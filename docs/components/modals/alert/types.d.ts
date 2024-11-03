import { ChopLogicIconName } from '../../../../../../../../../src/components/misc/icon/Icon';
import { CommonComponentProps } from '../../../../../../../../../src/utils/types';

export type ChopLogicAlertMode = 'success' | 'error' | 'warning' | 'info' | 'help';
export type ChopLogicAlertProps = CommonComponentProps & {
  isOpened: boolean;
  onClose: () => void;
  message: string;
  mode?: ChopLogicAlertMode;
  icon?: ChopLogicIconName;
};
export type ChopLogicAlertHeaderProps = {
  onClose: () => void;
  mode: ChopLogicAlertMode;
  title?: string;
  icon?: ChopLogicIconName;
};
