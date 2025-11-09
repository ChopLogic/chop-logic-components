import type { ImageSource } from '@models';
import type { FC } from 'react';
import { BasicImage } from './BasicImage';
import styles from './Image.module.scss';

type Props = {
  sources: ImageSource[];
  src: string;
  alt: string;
  sizes?: string;
  width?: number | string;
  height?: number | string;
  loading?: 'lazy' | 'eager';
  decoding?: 'sync' | 'async' | 'auto';
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
};

export const ResponsivePicture: FC<Props> = ({ sources = [], ...rest }) => {
  return (
    <picture className={styles.picture}>
      {sources.map((source, index) => (
        <source
          key={`${source.src}-${index}`}
          srcSet={source.descriptor ? `${source.src} ${source.descriptor}` : source.src}
          media={source.media}
          type={source.type}
        />
      ))}
      <BasicImage {...rest} />
    </picture>
  );
};
