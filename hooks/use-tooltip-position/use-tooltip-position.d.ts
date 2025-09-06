import { RefObject } from '../../../node_modules/react';
type useTooltipPositionParams = {
    wrapperRef: RefObject<HTMLElement | null>;
    tooltipRef: RefObject<HTMLElement | null>;
    isOpened: boolean;
    spacing?: number;
};
export declare const useTooltipPosition: ({ wrapperRef, tooltipRef, isOpened, spacing }: useTooltipPositionParams) => {
    top: number;
    left: number;
};
export {};
