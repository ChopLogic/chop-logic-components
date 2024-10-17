import { PropsWithChildren } from 'react';

export type ChopLogicTooltipProps = PropsWithChildren &
  React.HTMLAttributes<HTMLElement> & {
    tooltipContent: string | React.ReactElement;
    containerTag?: TooltipContainerTag;
    visibleOn?: 'hover' | 'click' | 'focus' | 'contextmenu';
  };

export type TooltipContainerTag = 'span' | 'div' | 'p' | 'strong' | 'em';
