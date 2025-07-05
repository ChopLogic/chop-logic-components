import { PropsWithChildren } from 'react';

import { ChopLogicComponentProps } from './_common';
import { ChopLogicIconName } from '@enums';

export interface ChopLogicDialogProps extends ChopLogicComponentProps, PropsWithChildren {
  isOpened: boolean;
  onClose: () => void;
  title: string;
  icon?: ChopLogicIconName;
}
