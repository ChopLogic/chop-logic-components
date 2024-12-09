import { default as React } from '../../../node_modules/react';

type useTooltipPositionParams = {
    wrapperRef: React.RefObject<HTMLSpanElement | HTMLDivElement>;
    tooltipRef: React.RefObject<HTMLSpanElement | HTMLDivElement>;
    isOpened: boolean;
    spacing?: number;
};
export declare const useTooltipPosition: ({ wrapperRef, tooltipRef, isOpened, spacing }: useTooltipPositionParams) => {
    top: number;
    left: number;
};
export {};
