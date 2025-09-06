import { Dimensions } from '../../models';
import { RefObject } from '../../../node_modules/react';
type useContainerDimensionsParams = {
    ref: RefObject<HTMLElement | null>;
    isVisible?: boolean;
};
export declare const useContainerDimensions: ({ ref, isVisible }: useContainerDimensionsParams) => Dimensions;
export {};
