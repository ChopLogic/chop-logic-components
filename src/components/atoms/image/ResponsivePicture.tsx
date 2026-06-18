import type { ArtDirectionSource, ImageSource, ResolutionSource } from '@types';
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
  aspectRatio?: string;
  className?: string;
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
};

const isArtDirection = (source: ImageSource): source is ArtDirectionSource =>
  'media' in source && !!source.media;
const isResolution = (source: ImageSource): source is ResolutionSource =>
  'descriptor' in source && !!source.descriptor;

export const ResponsivePicture: FC<Props> = ({ sources = [], sizes, ...rest }) => {
  const artDirectionSources = sources.filter(isArtDirection);
  const resolutionSources = sources.filter(isResolution);

  // Resolution switching: combine into a single srcSet on the <img>
  const srcSet =
    resolutionSources.length > 0
      ? resolutionSources.map((s) => `${s.src} ${s.descriptor}`).join(', ')
      : undefined;

  return (
    <picture className="cl-image__picture">
      {artDirectionSources.map((source) => (
        <source key={source.src} srcSet={source.src} media={source.media} type={source.type} />
      ))}
      <BasicImage srcSet={srcSet} sizes={srcSet ? sizes : undefined} {...rest} />
    </picture>
  );
};
