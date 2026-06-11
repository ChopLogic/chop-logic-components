import { GalleryMode } from '../../../../types';
import { RefObject } from '../../../../../node_modules/react';
interface CarouselScrollState {
    showPrev: boolean;
    showNext: boolean;
    scrollForward: () => void;
    scrollBackward: () => void;
}
export declare const useCarouselScroll: (containerRef: RefObject<HTMLDivElement | null>, layout: GalleryMode) => CarouselScrollState;
export {};
