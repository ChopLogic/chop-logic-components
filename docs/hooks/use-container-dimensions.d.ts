import { default as React } from '../../node_modules/react';
import { Dimensions } from '../models';
type useContainerDimensionsParams = {
    ref: React.RefObject<HTMLElement | null>;
    isVisible?: boolean;
};
export declare const useContainerDimensions: ({ ref, isVisible }: useContainerDimensionsParams) => Dimensions;
export {};
