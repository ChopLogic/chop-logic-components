import type { TooltipContainer } from '@enums';
import type { PropsWithChildren, ReactElement } from 'react';

import type { ChopLogicComponentProps } from './_common';

export interface TooltipProps extends PropsWithChildren, ChopLogicComponentProps {
  tooltipContent: string | ReactElement;
  containerTag?: TooltipContainer;
  visibleOn?: 'hover' | 'click' | 'focus' | 'contextmenu';
  autoClose?: boolean;
  autoCloseDelay?: number;
}
