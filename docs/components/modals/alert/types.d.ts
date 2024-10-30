import { ChopLogicIconName } from '../../../../../../../../../src/components/misc/icon/Icon';

export type ChopLogicAlertMode = 'success' | 'error' | 'warning' | 'info' | 'help';
export type ChopLogicAlertProps = React.HTMLAttributes<HTMLDivElement> & {
  isOpened: boolean;
  onClose: () => void;
  message: string;
  title?: string;
  mode?: ChopLogicAlertMode;
  icon?: ChopLogicIconName;
};
export type ChopLogicAlertHeaderProps = {
  onClose: () => void;
  mode: ChopLogicAlertMode;
  title?: string;
  icon?: ChopLogicIconName;
};
