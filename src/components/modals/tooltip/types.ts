import { PropsWithChildren } from 'react';

export type ChopLogicTooltipProps = PropsWithChildren &
  React.HTMLAttributes<HTMLElement> & {
    tooltipContent: string | React.ReactElement;
    id: string;
    containerTag?: 'span' | 'div' | 'p' | 'strong' | 'em';
    visibleOn?: 'hover' | 'click' | 'focus' | 'contextmenu';
  };
