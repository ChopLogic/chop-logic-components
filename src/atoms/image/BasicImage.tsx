import type { FC } from 'react';

type Props = {
  src: string;
  alt: string;
  sizes?: string;
  width?: number | string;
  height?: number | string;
  loading?: 'lazy' | 'eager';
  decoding?: 'sync' | 'async' | 'auto';
};

export const BasicImage: FC<Props> = ({
  src,
  alt,
  width,
  height,
  sizes,
  loading = 'lazy',
  decoding = 'async',
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      sizes={sizes}
    />
  );
};
