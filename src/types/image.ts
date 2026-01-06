export interface ImageSource {
  src: string;
  descriptor?: string;
  media?: string;
  type?: string;
}

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
