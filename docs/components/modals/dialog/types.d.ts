import { CommonComponentProps } from '../../../../../../../../../src/utils/types';
import { PropsWithChildren } from '../../../../node_modules/react';

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
