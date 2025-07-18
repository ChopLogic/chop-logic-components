import { default as React } from '../../../node_modules/react';
type useTooltipPositionParams = {
    wrapperRef: React.RefObject<HTMLElement | null>;
    tooltipRef: React.RefObject<HTMLElement | null>;
    isOpened: boolean;
    spacing?: number;
};
export declare const useTooltipPosition: ({ wrapperRef, tooltipRef, isOpened, spacing }: useTooltipPositionParams) => {
    top: number;
    left: number;
};
export {};
