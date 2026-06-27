// Art-direction source: browser picks by media query
export interface ArtDirectionSource {
  src: string;
  media: string;
  type?: string;
  descriptor?: never;
}

// Resolution-switching source: browser picks optimal size from srcSet + sizes
export interface ResolutionSource {
  src: string;
  descriptor: string;
  type?: string;
  media?: never;
}

export interface PlainSource {
  src: string;
  type?: string;
  media?: never;
  descriptor?: never;
}

export type ImageSource = ArtDirectionSource | ResolutionSource | PlainSource;

export interface ImageProps {
  src: string;
  alt: string;
  sources?: ImageSource[];
  sizes?: string;
  caption?: string;
  width?: number | string;
  height?: number | string;
  aspectRatio?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'sync' | 'async' | 'auto';
  className?: string;
  decorative?: boolean;
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}
