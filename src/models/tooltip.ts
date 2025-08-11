import { TooltipContainer } from '@enums';
import { PropsWithChildren, ReactElement } from 'react';

import { ChopLogicComponentProps } from './_common';

export interface ChopLogicTooltipProps extends PropsWithChildren, ChopLogicComponentProps {
  tooltipContent: string | ReactElement;
  containerTag?: TooltipContainer;
  visibleOn?: 'hover' | 'click' | 'focus' | 'contextmenu';
  autoClose?: boolean;
  autoCloseDelay?: number;
}
