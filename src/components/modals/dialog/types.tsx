import { PropsWithChildren } from 'react';

export type ChopLogicModalProps = PropsWithChildren &
  React.HTMLAttributes<HTMLDivElement> & {
    isOpened: boolean;
    onClose: () => void;
    title: string;
  };
