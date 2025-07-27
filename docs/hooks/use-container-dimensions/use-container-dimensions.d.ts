import { Dimensions } from '../../models';
import { default as React } from '../../../node_modules/react';
type useContainerDimensionsParams = {
    ref: React.RefObject<HTMLElement | null>;
    isVisible?: boolean;
};
export declare const useContainerDimensions: ({ ref, isVisible }: useContainerDimensionsParams) => Dimensions;
export {};
