import { PropsWithChildren } from 'react';
import { CommonComponentProps } from 'utils/types';

export type ChopLogicDialogProps = CommonComponentProps &
  PropsWithChildren & {
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
