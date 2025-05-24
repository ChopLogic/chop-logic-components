import { PropsWithChildren, ReactElement } from 'react';
import { ChopLogicTooltipContainer } from '@enums';

import { ChopLogicComponentProps } from '../common';

export interface ChopLogicTooltipProps extends PropsWithChildren, ChopLogicComponentProps {
  tooltipContent: string | ReactElement;
  containerTag?: ChopLogicTooltipContainer;
  visibleOn?: 'hover' | 'click' | 'focus' | 'contextmenu';
}
