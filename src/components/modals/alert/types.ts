import { CLIcon } from 'components/misc/icon/types';

export type ChopLogicAlertMode = 'success' | 'error' | 'warning' | 'info' | 'help';

export type ChopLogicAlertProps = React.HTMLAttributes<HTMLDivElement> & {
  isOpened: boolean;
  onClose: () => void;
  message: string;
  title?: string;
  mode?: ChopLogicAlertMode;
  icon?: CLIcon;
};
