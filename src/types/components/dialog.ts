import { HTMLAttributes, PropsWithChildren } from 'react';

import { ChopLogicTheme } from '@/types';

import { CommonComponentProps } from './_common';

export type ChopLogicDialogProps = CommonComponentProps &
  PropsWithChildren & {
    isOpened: boolean;
    onClose: () => void;
    title: string;
  };

export type DialogLayoutProps = PropsWithChildren &
  HTMLAttributes<HTMLDivElement> & {
    title: string;
    onClose: () => void;
    isOpened: boolean;
    theme: ChopLogicTheme;
  };
