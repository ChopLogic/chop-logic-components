import { PropsWithChildren } from 'react';

import { CommonComponentProps } from './_common';

export interface ChopLogicDialogProps extends CommonComponentProps, PropsWithChildren {
  isOpened: boolean;
  onClose: () => void;
  title: string;
}
