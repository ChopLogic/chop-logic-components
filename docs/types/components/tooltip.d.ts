import { PropsWithChildren, ReactElement } from '../../../node_modules/react';
import { CommonComponentProps } from './_common';

export type ChopLogicTooltipProps = PropsWithChildren & CommonComponentProps & {
    tooltipContent: string | ReactElement;
    containerTag?: TooltipContainerTag;
    visibleOn?: 'hover' | 'click' | 'focus' | 'contextmenu';
};
export type TooltipContainerTag = 'span' | 'div' | 'p' | 'strong' | 'em';
