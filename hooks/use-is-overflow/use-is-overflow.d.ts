import { RefObject } from '../../../node_modules/react';
export declare const useIsOverflow: ({ ref, dimension, isMounted, }: {
    ref: RefObject<HTMLElement | null>;
    dimension: "width" | "height";
    isMounted?: boolean;
}) => boolean;
