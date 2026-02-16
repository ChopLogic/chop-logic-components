import type { ImageSource } from '@types';
import type { FC } from 'react';
import { BasicImage } from './BasicImage';

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
    <picture className="cl-image__picture">
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
