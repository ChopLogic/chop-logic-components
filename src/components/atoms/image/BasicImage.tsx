import type { FC } from 'react';

type Props = {
  src: string;
  alt: string;
  sizes?: string;
  width?: number | string;
  height?: number | string;
  loading?: 'lazy' | 'eager';
  decoding?: 'sync' | 'async' | 'auto';
  aspectRatio?: string;
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
};

export const BasicImage: FC<Props> = ({ aspectRatio, alt, ...props }) => {
  return <img {...props} alt={alt} style={{ aspectRatio }} className="cl-image__img" />;
};
