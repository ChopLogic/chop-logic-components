import type { ImageProps } from '@models';
import { getClassName } from '@utils';
import type { FC } from 'react';
import styles from './Image.module.scss';

const Image: FC<ImageProps> = ({
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
  const figureClass = getClassName([styles.figure, { [styles.figure__withCaption]: caption }]);

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

  if (caption) {
    return (
      <figure className={figureClass}>
        {imageElement}
        <figcaption className={styles.caption}>{caption}</figcaption>
      </figure>
    );
  }

  return imageElement;
};

export default Image;
