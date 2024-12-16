import { default as React } from '../../node_modules/react';

type WithTooltipProps = {
    tooltip?: string;
    visibleOn?: 'hover' | 'click' | 'focus' | 'contextmenu';
};
export declare function withTooltip<P extends object>(Component: React.ComponentType<P>): React.FC<P & WithTooltipProps>;
export {};
