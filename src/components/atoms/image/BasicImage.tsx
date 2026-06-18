import { getClassName } from '@utils';
import type { FC } from 'react';

type Props = {
  src: string;
  alt: string;
  srcSet?: string;
  sizes?: string;
  width?: number | string;
  height?: number | string;
  loading?: 'lazy' | 'eager';
  decoding?: 'sync' | 'async' | 'auto';
  aspectRatio?: string;
  className?: string;
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
};

export const BasicImage: FC<Props> = ({ aspectRatio, alt, className, ...props }) => {
  const imageClass = getClassName(['cl-image__img', className]);

  return <img {...props} alt={alt} style={{ aspectRatio }} className={imageClass} />;
};
