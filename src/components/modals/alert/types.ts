export type ChopLogicAlertMode = 'success' | 'error' | 'warning' | 'info';

export type ChopLogicAlertProps = React.HTMLAttributes<HTMLDivElement> & {
  isOpened: boolean;
  onClose: () => void;
  title: string;
  message: string;
  mode: ChopLogicAlertMode;
};
