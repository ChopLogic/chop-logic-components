import { ComponentType, FC } from '../../../node_modules/react';
type WithTooltipProps = {
    tooltip?: string;
    visibleOn?: 'hover' | 'click' | 'focus' | 'contextmenu';
};
export declare function withTooltip<P extends object>(Component: ComponentType<P>): FC<P & WithTooltipProps>;
export {};
