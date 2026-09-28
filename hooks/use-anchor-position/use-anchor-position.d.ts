import { RefObject } from '../../../node_modules/react';
type UseAnchorPositionParams = {
    anchorRef: RefObject<HTMLElement | null>;
    floatingRef: RefObject<HTMLElement | null>;
    isOpened: boolean;
    spacing?: number;
};
export declare const useAnchorPosition: ({ anchorRef, floatingRef, isOpened, spacing, }: UseAnchorPositionParams) => {
    top: number;
    left: number;
};
export {};
