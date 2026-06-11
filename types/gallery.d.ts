import { ChopLogicComponentProps } from './_common';
import { ImageProps } from './image';
export type GalleryItem = ImageProps;
export type GalleryMode = 'grid' | 'masonry' | 'carousel';
export interface GalleryProps extends ChopLogicComponentProps {
    images?: GalleryItem[];
    layout?: GalleryMode;
    columns?: number;
    rows?: number;
    gap?: string;
    label?: string;
    enableFullscreen?: boolean;
}
