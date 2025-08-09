import { ChopLogicTooltipContainer } from '../enums';
import { PropsWithChildren, ReactElement } from '../../node_modules/react';
import { ChopLogicComponentProps } from './_common';
export interface ChopLogicTooltipProps extends PropsWithChildren, ChopLogicComponentProps {
    tooltipContent: string | ReactElement;
    containerTag?: ChopLogicTooltipContainer;
    visibleOn?: 'hover' | 'click' | 'focus' | 'contextmenu';
    autoClose?: boolean;
    autoCloseDelay?: number;
}
