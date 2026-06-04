import type { ChopLogicComponentProps } from './_common';
import type { ImageProps } from './image';

/** A single image item in the gallery */
export type GalleryItem = ImageProps;

/** Available layout modes */
export type GalleryMode = 'grid' | 'masonry' | 'carousel';

/** Gallery component props */
export interface GalleryProps extends ChopLogicComponentProps {
  /** Array of image items to display */
  images?: GalleryItem[];
  /** Layout mode for the gallery display */
  layout?: GalleryMode;
  /** Number of columns (grid: 1-12, masonry: overrides responsive default) */
  columns?: number;
  /** Maximum visible rows (grid mode only) */
  rows?: number;
  /** CSS gap value between items (defaults to --cl-m-gap) */
  gap?: string;
  /** Accessible label for the gallery region */
  label?: string;
}
