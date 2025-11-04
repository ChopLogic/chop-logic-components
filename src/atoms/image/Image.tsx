import { withFigureCaption } from '@hocs';
import type { ImageProps } from '@models';
import { getClassName } from '@utils';
import type { FC } from 'react';
import styles from './Image.module.scss';

const ImageContainer: FC<ImageProps> = ({
  src,
  alt,
  sources = [],
  sizes,
  caption,
  width,
  height,
  aspectRatio,
  loading = 'lazy',
  decoding = 'async',
  className,
  decorative = false,
  ...rest
}) => {
  const imageClass = getClassName([styles.image, className]);
  const hasResponsiveSources = sources.length > 0;
  const finalAlt = decorative ? '' : alt;

  const imageElement = (
    <>
      {hasResponsiveSources && (
        <picture className={styles.picture}>
          {sources.map((source, index) => (
            <source
              key={`${source.src}-${index}`}
              srcSet={source.descriptor ? `${source.src} ${source.descriptor}` : source.src}
              media={source.media}
              type={source.type}
            />
          ))}
          <img
            src={src}
            alt={finalAlt}
            sizes={sizes}
            width={width}
            height={height}
            loading={loading}
            decoding={decoding}
            className={imageClass}
            style={{
              ...(aspectRatio && { aspectRatio }),
              ...(width && { width: typeof width === 'number' ? `${width}px` : width }),
              ...(height && { height: typeof height === 'number' ? `${height}px` : height }),
            }}
            {...rest}
          />
        </picture>
      )}

      {!hasResponsiveSources && (
        <img
          src={src}
          alt={finalAlt}
          width={width}
          height={height}
          loading={loading}
          decoding={decoding}
          className={imageClass}
          style={{
            ...(aspectRatio && { aspectRatio }),
            ...(width && { width: typeof width === 'number' ? `${width}px` : width }),
            ...(height && { height: typeof height === 'number' ? `${height}px` : height }),
          }}
          {...rest}
        />
      )}
    </>
  );

  return imageElement;
};

const Image = withFigureCaption(ImageContainer);

export default Image;
