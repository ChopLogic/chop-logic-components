import { withFigureCaption } from '@hocs';
import type { ImageProps } from '@models';
import { getClassName } from '@utils';
import type { FC } from 'react';
import { BasicImage } from './BasicImage';
import styles from './Image.module.scss';
import { ResponsivePicture } from './ResponsivePicture';

const ImageContainer: FC<ImageProps> = ({
  alt,
  sources = [],
  className,
  decorative = false,
  ...rest
}) => {
  const wrapperClass = getClassName([styles.image, className]);
  const hasResponsiveSources = sources.length > 0;
  const finalAlt = decorative ? '' : alt;

  return (
    <div className={wrapperClass}>
      {hasResponsiveSources ? (
        <ResponsivePicture alt={finalAlt} sources={sources} {...rest} />
      ) : (
        <BasicImage alt={finalAlt} {...rest} />
      )}
    </div>
  );
};

const Image = withFigureCaption(ImageContainer);

export default Image;
