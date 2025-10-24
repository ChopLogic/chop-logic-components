import type { IconName } from '@enums';
import type { PropsWithChildren } from 'react';

import type { ChopLogicComponentProps } from './_common';

export interface DialogProps extends ChopLogicComponentProps, PropsWithChildren {
  isOpened: boolean;
  onClose: () => void;
  title: string;
  icon?: IconName;
}
