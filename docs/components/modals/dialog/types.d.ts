import { PropsWithChildren } from '../../../../node_modules/react';

export type ChopLogicDialogProps = PropsWithChildren &
  React.HTMLAttributes<HTMLDivElement> & {
    isOpened: boolean;
    onClose: () => void;
    title: string;
  };
export type DialogLayoutProps = PropsWithChildren &
  React.HTMLAttributes<HTMLDivElement> & {
    title: string;
    onClose: () => void;
    isOpened: boolean;
  };
