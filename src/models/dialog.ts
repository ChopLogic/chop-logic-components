import { PropsWithChildren } from 'react';

import { ChopLogicComponentProps } from './_common';

export interface ChopLogicDialogProps extends ChopLogicComponentProps, PropsWithChildren {
  isOpened: boolean;
  onClose: () => void;
  title: string;
}
