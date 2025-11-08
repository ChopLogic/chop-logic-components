import type { FC } from 'react';
import styles from './Image.module.scss';

type Props = {
  src: string;
  alt: string;
  sizes?: string;
  width?: number | string;
  height?: number | string;
  loading?: 'lazy' | 'eager';
  decoding?: 'sync' | 'async' | 'auto';
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
};

export const BasicImage: FC<Props> = ({
  src,
  alt,
  width,
  height,
  sizes,
  loading = 'lazy',
  decoding = 'async',
  onError,
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
      className={styles.img}
      onError={onError}
    />
  );
};
