export interface ImageSource {
  /** The URL of the image */
  src: string;
  /** The density or width descriptor (e.g., "1x", "2x", "400w") */
  descriptor?: string;
  /** The media query for this source */
  media?: string;
  /** The MIME type of the image */
  type?: string;
}

export interface ImageProps {
  /** The main image source (required) */
  src: string;
  /** Alternative text description (required for accessibility) */
  alt: string;
  /** Array of additional image sources for different screen sizes/densities */
  sources?: ImageSource[];
  /** Sizes attribute to define how much space the image takes up */
  sizes?: string;
  /** Optional caption displayed below the image */
  caption?: string;
  /** Width of the image (in pixels or percentage) */
  width?: number | string;
  /** Height of the image (in pixels or percentage) */
  height?: number | string;
  /** Whether the image should maintain its aspect ratio */
  aspectRatio?: string;
  /** Loading behavior ('lazy' | 'eager') */
  loading?: 'lazy' | 'eager';
  /** Decoding behavior ('sync' | 'async' | 'auto') */
  decoding?: 'sync' | 'async' | 'auto';
  /** Additional CSS class for custom styling */
  className?: string;
  /** Whether the image is decorative (hides from screen readers) */
  decorative?: boolean;
}
