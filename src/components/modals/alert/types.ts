export type ChopLogicAlertProps = React.HTMLAttributes<HTMLDivElement> & {
  isOpened: boolean;
  onClose: () => void;
  title: string;
  message: string;
};
